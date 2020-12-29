// https://observablehq.com/@elibenton/federal-budgets@435
import define1 from './e93997d5089d7165@2286.js'

export default function define(runtime, observer) {
	const main = runtime.module()
	const fileAttachments = new Map([['outlays@1.csv', '/outlays.csv']])
	main.builtin(
		'FileAttachment',
		runtime.fileAttachments(name => fileAttachments.get(name))
	)
	main.variable(observer('title')).define('title', ['md'], function (md) {
		return md`
# Explore The Federal Budget

-  Hover over a circle to see how much each line item costs.
-  Click on an outer circle to zoom in. Click anywhere to zoom out
-  Use the dropdown menu to change the budget year.

**Note**: This graphic only includes the largest government departments. If you
want to view additional departments, you can add them [here](#spacing). All data
is publically available from the
[Office of Budget and Management](https://www.whitehouse.gov/omb/). You can
[download](https://obamawhitehouse.archives.gov/sites/default/files/omb/budget/fy2017/assets/outlays.xls)
your own copy. <br/><br/>`
	})
	main
		.variable(observer('viewof budgetYear'))
		.define('viewof budgetYear', ['select', 'd3'], function (select, d3) {
			return select({
				options: d3.range(1962, 2021).reverse(),
				title: 'Budget Year',
				value: 2020
				// multiple: true
			})
		})
	main
		.variable(observer('budgetYear'))
		.define('budgetYear', ['Generators', 'viewof budgetYear'], (G, _) =>
			G.input(_)
		)
	main
		.variable(observer('chart'))
		.define(
			'chart',
			['pack', 'budgetObject', 'd3', 'width', 'height', 'color'],
			function (pack, budgetObject, d3, width, height, color) {
				const root = pack(budgetObject)
				let focus = root
				let view

				const svg = d3
					.create('svg')
					.attr(
						'viewBox',
						`-${width / 2} -${height / 2} ${width} ${height}`
					)
					.style('display', 'block')
					.style('margin', '0 -14px')
					.style('background', '#e5e7eb')
					.style('cursor', 'pointer')
					.on('click', event => zoom(event, root))

				const node = svg
					.append('g')
					.selectAll('circle')
					.data(root.descendants().slice(1))
					.join('circle')
					.attr('fill', d => (d.children ? color(1) : color(2)))
					.on('mouseover.outline', function () {
						d3.select(this).attr('stroke', '#000')
					})
					.on('mouseout.outline', function () {
						d3.select(this).attr('stroke', null)
					})
					.on(
						'click',
						(event, d) =>
							d.children &&
							focus !== d &&
							(zoom(event, d), event.stopPropagation())
					)

				const label = svg
					.append('g')
					.style('font', '13px sans-serif')
					.attr('pointer-events', 'none')
					.attr('text-anchor', 'middle')
					.selectAll('text')
					.data(root.descendants())
					.join('text')
					.style('fill-opacity', d => (d.parent === root ? 1 : 0))
					.style('display', d => (d.parent === root ? 'inline' : 'none'))
					.text(d => d.data.name)

				zoomTo([root.x, root.y, root.r * 2])

				function zoomTo(v) {
					const k = width / v[2]

					view = v

					label.attr(
						'transform',
						d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
					)
					node.attr(
						'transform',
						d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
					)
					node.attr('r', d => d.r * k)
				}

				function zoom(event, d) {
					const focus0 = focus

					focus = d

					const transition = svg
						.transition()
						.duration(event.altKey ? 7500 : 750)
						.tween('zoom', d => {
							const i = d3.interpolateZoom(view, [
								focus.x,
								focus.y,
								focus.r * 2.2
							])
							return t => zoomTo(i(t))
						})

					label
						.filter(function (d) {
							return (
								(d.parent === focus ||
									this.style.display === 'inline') &&
								(d.children || d.value > d.parent.value * 0.005)
							)
						})
						.transition(transition)
						.style('fill-opacity', d => (d.parent === focus ? 1 : 0))
						.on('start', function (d) {
							if (d.parent === focus) this.style.display = 'inline'
						})
						.on('end', function (d) {
							if (d.parent !== focus) this.style.display = 'none'
						})
				}

				return svg.node()
			}
		)
	main
		.variable(observer('spacing'))
		.define('spacing', ['html'], function (html) {
			return html`<br /><br /><br /><br />`
		})
	main
		.variable(observer('viewof departments'))
		.define(
			'viewof departments',
			['checkbox', 'budgetMap', 'selectedDepartments'],
			function (checkbox, budgetMap, selectedDepartments) {
				return checkbox({
					title: 'Select Departments to View',
					options: Array.from(budgetMap).map(d => d[0]),
					value: selectedDepartments
				})
			}
		)
	main
		.variable(observer('departments'))
		.define('departments', ['Generators', 'viewof departments'], (G, _) =>
			G.input(_)
		)
	main.variable(observer()).define(['md'], function (md) {
		return md`
---

## Data Manipulation`
	})
	main
		.variable(observer('budgetObject'))
		.define(
			'budgetObject',
			['budgetMap', 'departments'],
			function (budgetMap, departments) {
				return {
					name: 'Federal Budget',
					children: Array.from(budgetMap)
						.filter(dept => departments.includes(dept[0]))
						.map(([name, children]) => ({
							name,
							children: Array.from(children).map(([name, value]) => ({
								name,
								value
							}))
						}))
				}
			}
		)
	main
		.variable(observer('selectedDepartments'))
		.define('selectedDepartments', function () {
			return [
				'Legislative Branch',
				'Judicial Branch',
				'Department of Agriculture',
				'Department of Commerce',
				'Department of Defense--Military Programs',
				'Department of Health and Human Services',
				'Department of the Interior',
				'Department of Justice',
				'Department of Labor',
				'Department of State',
				'Department of the Treasury',
				'Social Security Administration',
				'Department of Education',
				'Department of Energy',
				'Environmental Protection Agency',
				'Department of Transportation',
				'Department of Homeland Security',
				'Department of Housing and Urban Development',
				'National Aeronautics and Space Administration',
				'Department of Veterans Affairs',
				'Executive Office of the President',
				'International Assistance Programs'
			]
		})
	main
		.variable(observer('allDepartments'))
		.define('allDepartments', ['budgetMap'], function (budgetMap) {
			return Array.from(budgetMap).map(d => d[0])
		})
	main
		.variable(observer('budgetMap'))
		.define(
			'budgetMap',
			['d3', 'budgetJSON', 'budgetYear'],
			function (d3, budgetJSON, budgetYear) {
				return d3.rollup(
					budgetJSON,
					v => d3.sum(v, d => d[budgetYear]),
					d => d['Agency Name'],
					d => d['Bureau Name']
				)
			}
		)
	main
		.variable(observer('budgetJSON'))
		.define('budgetJSON', ['FileAttachment'], function (FileAttachment) {
			return FileAttachment('outlays@1.csv').csv({ typed: true })
		})
	main.variable(observer()).define(['md'], function (md) {
		return md`
---

## Appendix`
	})
	main
		.variable(observer('styles'))
		.define('styles', ['html'], function (html) {
			return html` <style>
				.svg-tooltip {
					font-family: -apple-system, system-ui, BlinkMacSystemFont,
						'Segoe UI', Helvetica, Arial, sans-serif,
						'Apple   Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
					background: rgba(69, 77, 93, 0.9);
					border-radius: 0.1rem;
					color: #fff;
					display: block;
					font-size: 11px;
					max-width: 320px;
					padding: 0.2rem 0.4rem;
					position: absolute;
					text-overflow: ellipsis;
					white-space: pre;
					z-index: 300;
					visibility: hidden;
				}
			</style>`
		})
	main
		.variable(observer('tooltip'))
		.define(
			'tooltip',
			['chart', 'd3', 'format'],
			function (chart, d3, format) {
				chart

				const tooltip = d3
					.select('body')
					.append('div')
					.attr('class', 'svg-tooltip')
					.style('position', 'absolute')
					.style('visibility', 'hidden')

				d3.selectAll('circle')
					.on('mouseover', function (event, d) {
						tooltip.html(`<b>${d.data.name}</b>\n$${format(d.value)}`)
						return tooltip.style('visibility', 'visible')
					})
					.on('mousemove', function (event) {
						return tooltip
							.style('top', event.pageY - 10 + 'px')
							.style('left', event.pageX + 10 + 'px')
					})
					.on('mouseout', function () {
						return tooltip.style('visibility', 'hidden')
					})
			}
		)
	main
		.variable(observer('pack'))
		.define('pack', ['d3', 'width', 'height'], function (d3, width, height) {
			return data =>
				d3
					.pack()
					.size([width - 2, height - 2])
					.padding(3)(
					d3
						.hierarchy(data)
						.sum(d => d.value)
						.sort((a, b) => b.value - a.value)
				)
		})
	main
		.variable(observer('treemap'))
		.define(
			'treemap',
			['d3', 'width', 'height'],
			function (d3, width, height) {
				return data =>
					d3
						.treemap()
						.tile(d3.treemapSquarify)
						.size([width, height])
						.padding(1)
						.round(true)(
						d3
							.hierarchy(data)
							.sum(d => d.value)
							.sort((a, b) => b.value - a.value)
					)
			}
		)
	main
		.variable(observer('height'))
		.define('height', ['width'], function (width) {
			return width
		})
	main.variable(observer('format')).define('format', ['d3'], function (d3) {
		return function format(number) {
			const newNum = d3.format('.2s')(number)

			if (newNum.slice(-1) === 'G') {
				return `${newNum.slice(0, -1)}B`
			} else {
				return newNum
			}
		}
	})
	main.variable(observer('color')).define('color', ['d3'], function (d3) {
		return d3
			.scaleLinear()
			.domain([0, 3])
			.range(['hsl(152,80%,80%)', 'hsl(228,30%,40%)'])
			.interpolate(d3.interpolateHcl)
	})
	main
		.variable(observer('checkbox'))
		.define('checkbox', ['input', 'html'], function (input, html) {
			return function checkbox(config = {}) {
				let {
					value: formValue,
					title,
					description,
					submit,
					disabled,
					options
				} = Array.isArray(config) ? { options: config } : config
				options = options.map(o =>
					typeof o === 'string' ? { value: o, label: o } : o
				)
				const form = input({
					type: 'checkbox',
					title,
					description,
					submit,
					getValue: input => {
						if (input.length)
							return Array.prototype.filter
								.call(input, i => i.checked)
								.map(i => i.value)
						return input.checked ? input.value : false
					},
					form: html`
						<form>
							${options.map(({ value, label }, i) => {
								const input = html`<input
									type="checkbox"
									name="input"
									${(formValue || []).indexOf(value) > -1
										? 'checked'
										: ''}
									style="vertical-align: top;"
								/>`
								input.setAttribute('value', value)
								if (disabled) input.setAttribute('disabled', disabled)
								const tag = html`<label
									style="display: block; margin: 5px 10px 3px 0; font-size: 0.85em;"
								>
									${input} ${label}
								</label>`
								return tag
							})}
						</form>
					`
				})
				form.output.remove()
				return form
			}
		})
	const child1 = runtime.module(define1)
	main.import('autoSelect', child1)
	main.import('select', child1)
	main.import('input', child1)
	main.variable(observer('d3')).define('d3', ['require'], function (require) {
		return require('d3@6')
	})
	return main
}
