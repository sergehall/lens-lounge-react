import { blogPhotographsMock } from './blogPhotographsMock';
import { blogProgrammingMock } from './blogProgrammingMock';

/**
 * Combines all blog mocks into a single object
 * Keys = category names (photography, programming, etc.)
 */
export const allBlogMocks = {
  ...blogPhotographsMock,
  ...blogProgrammingMock,
};
