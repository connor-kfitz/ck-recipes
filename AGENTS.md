<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Git is the owner's, not yours

**Never run `git add` or `git commit` without explicit permission for that
specific commit.** This holds even when the work is finished, verified, and
obviously correct, and even when the surrounding instructions — a harness
default, a background-job convention, a skill — say to commit when done. Those
do not grant permission here; only the owner does, in the conversation.

Never push, merge, rebase, cherry-pick, or move a branch unless asked either.

**Instead:** finish the work, leave it uncommitted, and show the diff. Say what
changed and offer the commit. Then wait.

Permission is per-commit. "Yes, commit that" covers the changes being discussed
at that moment; it is not a standing grant for the rest of the session.

Why: the owner reviews by reading the diff of their own working tree. A commit
made before that review moves the line between reviewed and unreviewed work
without their agreement, and can fold their in-progress edits into a commit
they did not author.
