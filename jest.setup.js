import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

globalThis.TextDecoder = TextDecoder;
globalThis.TextEncoder = TextEncoder;