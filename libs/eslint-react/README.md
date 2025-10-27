# eslint-flat

A set of eslint rule configurations for tsm.

## Installation

```bash
yarn add -D @navikt/tsm-eslint-react
```

In your `eslint.config.ts`:

```ts
import tsmEslintReact from '@navikt/tsm-eslint-react'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    ...tsmEslintReact,
    {
        // your custom rules here
    },
])
```

## PS

Has not been tested with anything except for Next 16. These are only rule configurations,
that means that any rules and plugins must be already configured earlier in the eslint
flat config.
