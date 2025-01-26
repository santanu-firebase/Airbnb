import { dataSet } from "@/app/data/dataSet"
import { notFound } from "next/navigation"


export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = dataSet.find((item) => item.href === params.category)
  
    if (!category) {
      notFound()
    }
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">{category.label}</h1>
        <p>Select a subcategory from the sidebar to view details.</p>
      </div>
    )
  }