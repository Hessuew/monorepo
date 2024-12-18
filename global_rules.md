# urFIT-child

Every time you choose to apply a rule(s), explicitly state the rule(s) in the output. You can abbreviate the rule description to a single word or phrase.

## Project Context

Website for a research group containing all the content of the group in a single place.

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure repository files as follows:

```
├── src/
    ├── assets/         # favicon, images, and tailwind styles
    ├── components/     # Shared Astro components
    ├── content/        # Blog related content
    ├── data/           # Data for different pages
    ├── utils/          # Helper functions
    ├── config          # Shared configuration
    ├── navigation      # Navigation of the website
    └── types.d.ts      # Types of the website
```

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS

## Naming Conventions

- Use lowercase with dashes for directories (e.g., components/form-wizard)
- Favor named exports for components and utilities
- Use PascalCase for component files (e.g., VisaForm.tsx)
- Use camelCase for utility files (e.g., formValidator.ts)

## TypeScript Usage

- Use TypeScript for all code; prefer interfaces over types
- Avoid enums; use const objects with 'as const' assertion
- Use functional components with TypeScript interfaces
- Define strict types for message passing between different parts of the extension
- Use absolute imports for all files ~/...
- Avoid try/catch blocks unless there's good reason to translate or handle error in that abstraction
- Use explicit return types for all functions

## State Management

- Not used at the moment
<!-- - Implement proper cleanup in useEffect hooks -->

## Syntax and Formatting

- Use "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals
- Use declarative JSX
- Implement proper TypeScript discriminated unions for message types

## UI and Styling

- Use existing components when possible
- Create new components when necessary
- Implement Tailwind CSS for styling

## Error Handling

- Implement proper error boundaries
- Log errors appropriately for debugging
- Provide user-friendly error messages
- Handle network failures gracefully

## Testing

- Write unit tests for utilities and components
- Implement E2E tests for critical flows
- Test across different Chrome versions
- Test memory usage and performance

## Security

- Implement Content Security Policy
- Sanitize user inputs
- Handle sensitive data properly
- Implement proper CORS handling

## Git Usage

We use Graphite The AI-powered pull request toolchain.

Commit Message Prefixes:

- "fix:" for bug fixes
- "feat:" for new features
- "perf:" for performance improvements
- "docs:" for documentation changes
- "style:" for formatting changes
- "refactor:" for code refactoring
- "test:" for adding missing tests
- "chore:" for maintenance tasks

Rules:

- Use lowercase for commit messages
- Use and fill the existing pull request template .github/PULL_REQUEST_TEMPLATE.md
- Include description for non-obvious changes
- Reference issue numbers when applicable

## Documentation

- Maintain clear README with setup instructions
- Keep manifest.json well-documented
- Don't include comments unless it's for complex logic

## Development Workflow

- Use proper version control
- Implement proper code review process
- Test in multiple environments
- Follow semantic versioning for releases
- Maintain changelog

## Notes

- If you are asked to fix something, start with analyzing what files you need in context and ask the user for them, do not make assumptions.
- Make self-improving updates to the rules.md file.
