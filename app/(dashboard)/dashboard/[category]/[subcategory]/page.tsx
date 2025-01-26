import { dataSet } from "@/app/data/dataSet";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function SubcategoryPage({ params }: { params: { category: string; subcategory: string } }) {

  const category = dataSet.find((item) => item.href === params.category)
  const subcategory = category?.subItems?.find((s) => s.href === params.subcategory)

  if (!category || !subcategory) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{subcategory.label}</h1>
      {subcategory.questions && subcategory.questions.length > 0 ? (
        <div>
          { subcategory.questions.map((question  , index) => (

          
              <Accordion type="single" collapsible key={index}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{Object.values(question)}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
            </div>
      ): (
        <p>No questions available for this subcategory.</p>
      )}
</div>  
  )

}