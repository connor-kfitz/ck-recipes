import { formatMinutes } from "../lib/format"
import { totalMinutes } from "../lib/recipe-detail"
import { MetaStrip } from "./MetaStrip"
import type { RecipeDetail } from "../lib/types"

type RecipeMetaStripProps = {
  detail: RecipeDetail
}

export function RecipeMetaStrip({ detail }: RecipeMetaStripProps) {
  return (
    <MetaStrip
      items={[
        { label: "Serves", value: String(detail.serves) },
        { label: "Prep", value: formatMinutes(detail.prepMinutes) },
        { label: "Cook", value: formatMinutes(detail.cookMinutes) },
        { label: "Total", value: formatMinutes(totalMinutes(detail)) }
      ]}
    />
  )
}
