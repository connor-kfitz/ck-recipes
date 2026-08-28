# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The owner-author publishes; readers cook. The primary visitor is a home cook who
arrives at a personal food site to find something to make and then follows the
recipe through to a finished dish — often with the page open in a kitchen while
their hands are busy. They are not signing up, saving, or contributing: there are
no accounts and no community layer. The secondary user is the author himself,
who is the sole source of every recipe and every product endorsement on the site.

## Product Purpose

A personal recipe collection, published so other people can cook from it. Success
is a visitor cooking one of these recipes and getting the outcome the author gets
— not sessions, saves, or subscriptions.

## Positioning

Every recipe names the actual products the author uses to make it ("brand picks";
the ingredient library reads "42 ingredients I stand behind"). The author's stated
reason is that the specific product materially changes whether the dish comes out
right, so naming it is part of the recipe rather than an add-on. This is
first-person endorsement from one cook's real kitchen — a neighboring recipe site
with a generic ingredient list cannot truthfully copy it, and it only holds while
the picks stay genuinely his.

Open decision: whether brand picks ever become commercial (affiliate or sponsored)
is undecided. Nothing in the product currently claims or implies a commercial
relationship, and no future work may introduce disclosure-bearing or shoppable
behavior without the author deciding it first.

## Operating Context

Reading happens mid-task: a cook is standing at a counter, glancing at the screen
between steps, frequently on a phone, sometimes with dirty or wet hands. Recipe
metadata that supports planning is already part of the content model — total time
and calories per serving on every recipe — because the decision "can I make this
tonight" comes before the cooking does.

## Capabilities and Constraints

Built on Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4 with
`@theme inline` tokens; icons from lucide-react; fonts Archivo (display) and Inter
(body) via `next/font/google`. Currently a single page (`app/page.tsx`) composed of
a site header, a pinned recipe, an ingredient library card, and a recent-recipes
grid.

All content is hardcoded in `app/data.ts` as typed exports. This is explicitly a
current state, not a commitment: the author expects to move recipe content to a
real source (CMS or database) later, so content shape should stay serializable and
presentation components should keep taking data as props rather than reaching for
it.

Not yet built, and not yet specified: recipe detail pages, an ingredients page, a
working search (the header field is presentational), and the mobile navigation
menu behind the header's menu button. Nav links and "see all" links are placeholders.

Terminology in use: **pinned** (the one featured recipe), **brand picks** (the
named products used in a recipe), **ingredient library** (the standing pantry of
endorsed ingredients), **recent** (the latest recipes).

## Brand Commitments

The site is named `recipes`, set lowercase with a gold period after it. Voice is
first-person, plain, and declarative — "42 ingredients I stand behind", "The
weeknight roast chicken" — confident without being promotional. Copy stays in the
author's own voice; no marketing register.

## Evidence on Hand

Real: the recipes and ingredient picks are the author's own. Imagery is currently
placeholder food photography served from Unsplash via a helper in `app/data.ts`,
with written alt text on every image.

Absent — must not be fabricated: there are no testimonials, no reviews, no user
counts, no press, no awards, no partnerships, and no photographs of the author's
actual dishes. The counts that appear in copy ("42 ingredients", "see all 42") are
current content claims and must stay consistent with whatever the real source
eventually holds.

## Product Principles

1. **The product pick is part of the recipe.** Where a specific brand changes the
   outcome, name it — treat brand picks as first-class recipe content, not a sidebar.
2. **Optimize for the cook mid-task.** A person with busy hands and a glance's worth
   of attention must be able to find their place; this outranks visual density.
3. **Answer "can I make this tonight" before "how".** Time and effort signals belong
   wherever a recipe is shown.
4. **One cook's real collection, stated plainly.** First-person and specific; never
   invent endorsements, provenance, or social proof the author does not have.
5. **Content is moving; the presentation should not care.** Keep data typed,
   serializable, and passed in, so the CMS/database migration is a swap.

## Accessibility & Inclusion

No formal standard has been set by the author. The incumbent code already holds a
baseline worth preserving: written alt text on every image, `aria-label`s on
icon-only controls, `aria-current` on the active nav link, and visible
`focus-visible` outlines on every interactive element. Kitchen-context reading
(distance, glancing, one-handed phone use) argues for generous target sizes and
type that survives a quick look.
