import Link from "next/link"

import type { RecipeDetail, Segment } from "../lib/types"

type RecipeDirectionsProps = {
  detail: RecipeDetail
  cookMode?: boolean
}

type StepBodyProps = {
  body: Segment[]
}

function StepBody({ body }: StepBodyProps) {
  return (
    <>
      {body.map((segment, index) => {
        const key = `${segment.kind}-${index}`

        if (segment.kind === "strong") {
          return (
            <strong key={key} className="font-semibold text-ink">
              {segment.text}
            </strong>
          )
        }

        if (segment.kind === "ingredient") {
          return (
            <Link
              key={key}
              href={`/ingredients/${segment.ingredientId ?? ""}`}
              className="border-b border-dotted border-ink transition-colors duration-200 hover:border-gold hover:text-gold-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
            >
              {segment.text}
            </Link>
          )
        }

        return <span key={key}>{segment.text}</span>
      })}
    </>
  )
}

export function RecipeDirections({ detail, cookMode = false }: RecipeDirectionsProps) {
  return (
    <div>
      <h2
        id="directions-heading"
        className="border-b border-rule pb-2 font-display text-[22px] font-extrabold text-ink"
      >
        Directions
      </h2>

      <ol className={`mt-5 flex flex-col ${cookMode ? "gap-7" : "gap-6"}`}>
        {detail.directions.map((step, index) => (
          <li key={step.label ?? index} className="flex gap-4">
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full border border-rule font-body text-sm font-medium tabular-nums text-ink"
            >
              {index + 1}
            </span>
            <div className="max-w-[62ch] pt-1">
              {step.label === undefined ? null : (
                <p className="mb-1.5 font-body text-[11px] font-semibold uppercase text-muted">
                  {step.label}
                </p>
              )}
              <p
                className={`font-body text-muted ${cookMode ? "text-[18px] leading-[1.7]" : "text-[15px] leading-relaxed"}`}
              >
                <StepBody body={step.body}/>
              </p>
              {step.bullets === undefined ? null : (
                <ul className="mt-2.5 flex flex-col gap-1.5 pl-4">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={`relative font-body text-muted before:absolute before:-left-4 before:text-gold-deep before:content-['•'] ${cookMode ? "text-[17px] leading-relaxed" : "text-sm leading-relaxed"}`}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
