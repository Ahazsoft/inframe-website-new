import { projectsData } from '@/components/portfolio/details/projectData'
// import PortfolioDetailsLayout from '@/components/portfolio/details/PortfolioDetailsLayout'
import PortfolioDetailsLayout from '@/pages/portfolio/details/portfolio-details-layout'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const project = projectsData.find(
    (item) => item.id === Number(id)
  )

  if (!project) {
    notFound()
  }

  return <PortfolioDetailsLayout project={project} />
}
