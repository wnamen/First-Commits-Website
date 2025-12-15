# CLAUDE.md - AI Assistant Guide for First-Commits-Website

## Project Overview

**First-Commits-Website** is a web project currently in its initial stages. This repository is designed to help developers make their first contributions or serve as a learning platform for version control and web development.

### Current Status
- **Stage**: Early Development
- **Last Updated**: 2025-12-15
- **Primary Branch**: `claude/claude-md-mj7ozsmv0jamywok-TG8jc`

## Repository Structure

```
First-Commits-Website/
├── README.md           # Project introduction and documentation
├── CLAUDE.md          # This file - AI assistant guidelines
└── .git/              # Git version control
```

### Expected Future Structure

As the project develops, expect the following typical web project structure:

```
First-Commits-Website/
├── src/               # Source code
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components/routes
│   ├── styles/        # CSS/styling files
│   ├── utils/         # Helper functions
│   └── assets/        # Static assets (images, fonts, etc.)
├── public/            # Public static files
├── tests/             # Test files
├── docs/              # Additional documentation
├── package.json       # Node.js dependencies (if applicable)
├── README.md          # Project documentation
└── CLAUDE.md         # This file
```

## Technology Stack

**Current**: Not yet determined

**Likely Technologies** (to be confirmed):
- Frontend Framework: React, Vue, Next.js, or vanilla HTML/CSS/JS
- Build Tools: Vite, Webpack, or similar
- Package Manager: npm, yarn, or pnpm
- Version Control: Git + GitHub

*Update this section as technology decisions are made.*

## Development Workflows

### Git Workflow

1. **Branch Naming Convention**:
   - Feature branches: `feature/<feature-name>`
   - Bug fixes: `fix/<bug-description>`
   - Claude AI branches: `claude/<session-id>`
   - Documentation: `docs/<topic>`

2. **Commit Message Format**:
   ```
   <type>: <short description>

   <optional detailed description>

   <optional footer>
   ```

   Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

   Examples:
   - `feat: add user authentication component`
   - `fix: resolve navigation menu overflow on mobile`
   - `docs: update installation instructions`

3. **Pull Request Process**:
   - Create descriptive PR titles
   - Include a summary of changes
   - Reference related issues if applicable
   - Ensure all tests pass before requesting review

### Code Organization Principles

1. **File Naming**:
   - Use kebab-case for files: `user-profile.js`, `nav-bar.css`
   - Use PascalCase for component files: `UserProfile.jsx`, `NavBar.tsx`
   - Keep filenames descriptive and concise

2. **Code Style** (to be established):
   - Follow consistent indentation (2 or 4 spaces)
   - Use semicolons consistently
   - Prefer const/let over var
   - Use meaningful variable names
   - Comment complex logic

3. **Component Structure** (if using React/Vue):
   - One component per file
   - Group related components in subdirectories
   - Separate business logic from presentation
   - Keep components small and focused

## AI Assistant Guidelines

### When Working on This Project

1. **Always Read Before Editing**:
   - Read files completely before making changes
   - Understand existing patterns and conventions
   - Match the project's existing code style

2. **Project Understanding**:
   - Check for package.json to understand dependencies
   - Look for config files (.eslintrc, .prettierrc, etc.)
   - Review existing components for patterns
   - Check tests to understand expected behavior

3. **Making Changes**:
   - Prefer editing existing files over creating new ones
   - Follow the established project structure
   - Don't over-engineer solutions
   - Avoid adding unnecessary dependencies
   - Write clear, self-documenting code

4. **Testing**:
   - Run existing tests before and after changes
   - Add tests for new functionality
   - Ensure no regressions are introduced

5. **Documentation**:
   - Update README.md when adding major features
   - Add inline comments for complex logic only
   - Update this CLAUDE.md file as the project evolves
   - Don't create unnecessary documentation files

### Common Tasks

#### Adding a New Feature
1. Understand the feature requirements
2. Explore existing code structure
3. Plan the implementation approach
4. Create/modify necessary files
5. Test the implementation
6. Update documentation if needed
7. Commit with descriptive message

#### Fixing a Bug
1. Reproduce the issue
2. Identify the root cause
3. Implement the fix
4. Verify the fix works
5. Check for similar issues elsewhere
6. Commit the fix

#### Refactoring
1. Ensure tests exist and pass
2. Make incremental changes
3. Run tests after each change
4. Maintain existing functionality
5. Update documentation if APIs change

### Tools and Commands

**Git Operations**:
```bash
# Check status
git status

# Create new branch
git checkout -b feature/your-feature

# Stage and commit changes
git add .
git commit -m "feat: your change description"

# Push to remote
git push -u origin branch-name
```

**Common Development Commands** (to be updated):
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Project Conventions

### Code Quality

1. **No Dead Code**: Remove commented-out code and unused imports
2. **No Hardcoded Values**: Use constants or environment variables
3. **Error Handling**: Handle errors gracefully, especially at system boundaries
4. **Security**: Avoid XSS, SQL injection, and other vulnerabilities
5. **Performance**: Write efficient code, avoid unnecessary re-renders

### File Organization

- Group related files together
- Keep file sizes manageable (< 300 lines ideally)
- Use index files for clean imports when appropriate
- Separate concerns (data, UI, logic)

### Accessibility

- Use semantic HTML elements
- Include alt text for images
- Ensure keyboard navigation works
- Maintain good color contrast
- Test with screen readers when possible

### Responsive Design

- Mobile-first approach
- Test on multiple screen sizes
- Use relative units (rem, em, %, vw/vh)
- Avoid fixed pixel widths

## Important Notes for AI Assistants

1. **This Project is New**: The structure will evolve. Update this document as decisions are made.

2. **Ask Before Major Changes**: If unclear about architecture or approach, clarify with the user first.

3. **Keep It Simple**: Don't add unnecessary complexity. The simplest solution is often the best.

4. **Security First**: Always consider security implications, especially for user input and authentication.

5. **Backwards Compatibility**: When the project matures, avoid breaking changes without discussion.

6. **Performance Matters**: Consider performance implications, especially for web assets and API calls.

7. **Update This File**: As the project grows, keep this CLAUDE.md file current with new conventions and patterns.

## Future Sections to Add

As the project develops, consider adding:

- [ ] API documentation and endpoints
- [ ] Database schema and migrations
- [ ] Environment setup instructions
- [ ] Deployment procedures
- [ ] Testing strategy and coverage goals
- [ ] CI/CD pipeline information
- [ ] Common troubleshooting guides
- [ ] Performance optimization guidelines
- [ ] Security best practices specific to this project

## Questions to Answer

These questions should be answered as development progresses:

1. What is the primary purpose of this website?
2. What framework/library will be used for the frontend?
3. Will there be a backend API? If so, what technology?
4. What is the deployment strategy?
5. What are the browser support requirements?
6. Is there a design system or style guide to follow?
7. What are the accessibility requirements?
8. What is the expected scale/traffic?

## Resources

- [Project README](./README.md)
- [Git Repository](https://github.com/wnamen/First-Commits-Website)
- [GitHub Issues](https://github.com/wnamen/First-Commits-Website/issues) (if available)

---

**Last Updated**: 2025-12-15
**Maintained By**: AI Assistants and Project Contributors
**Version**: 1.0.0

*This document should be updated regularly as the project evolves and new conventions are established.*
