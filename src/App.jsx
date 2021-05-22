import { Targscontainer } from './components/Targscontainer/TargsContainer'
import { Layout } from './components/Layout/Layout'
import { useEffect, useState } from 'react'
import { Anchor } from './components/Anchor/Anchor'
import { Footer } from './components/Footer/Footer'

export default function App() {
	const initialData = {
		date: '',
		people_vaccinated: null,
		total_vaccinations: null,
		people_fully_vaccinated: null,
		daily_vaccinations: null,
		people_fully_vaccinated_per_hundred: null,
	}
	const [data, setData] = useState(initialData)

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
		)
			.then((data) => data.json())
			.then((res) => {
				let lastData = res[40].data.length - 1
				setData(res[40].data[lastData])
			})
	}, [])

	return (
		<>
			<Layout>
				<h1>
					Vacunación <span>COVID-19</span> en Colombia
				</h1>
				<p className='date'>{data.date}</p>
				<Targscontainer data={data} />
				<Anchor
					altText='Datos de: '
					text='Our World Data'
					link='https://github.com/owid/covid-19-data/tree/master/public/data/vaccinations'
					color='true'
				/>
				<Footer />
			</Layout>
		</>
	)
}
