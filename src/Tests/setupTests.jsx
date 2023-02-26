// here write all specific setup that should be run before any test.
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
