# Property Portal Mobile

React Native + Expo shell for the post-web-MVP mobile experience. It currently provides the branded foundation and navigation target for future API-connected browse and search screens.

## Planned scope

The first mobile release is expected to cover authentication, browse/search, listing details, favorites, inquiries, and notifications. Owner/agent management follows the consumer flows.

## Run locally

```bash
pnpm install
pnpm start
```

Platform-specific commands:

```bash
pnpm android
pnpm ios
pnpm web
pnpm typecheck
```

The mobile client will consume the same API contract and domain terminology as the web app; it does not share source imports with the sibling projects.

## Related documentation

See the workspace [`SPEC.md`](../SPEC.md) for product requirements and [`AGENTS.md`](../AGENTS.md) for repository boundaries and engineering conventions.
