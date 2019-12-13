import { getLanguageFromUrl } from './location.helper';

describe("location.helper", () => {

  beforeAll(() => {
    // Mock warn & error to catch errors thrown by React into the console
    console.warn = jest.fn();
    console.error = jest.fn();
  });

  afterEach(() => {
    expect(console.warn).not.toBeCalled();
    expect(console.error).not.toBeCalled();
  });

  it("should return correct language when no language is defined", () => {
    const qs = getLanguageFromUrl("/", "en");
    expect(qs).toBe("en");
  });

  it("should return correct language when no language is defined 2", () => {
    const qs = getLanguageFromUrl("/search?filters=W3sidHlwZSI6ImluZHVzdHJ5IiwidGV4dCI6Ik1lYXQiLCJjaGlsZHJlbnMiOltdLCJpZCI6ImQ4OTczZjQwLTczMGQtMTFlOC04NGQ2LWJkNDZmMWQwYTI4YiJ9XQ==", "en");
    expect(qs).toBe("en");
  });

  it("should return correct language when no language is defined 3", () => {
    const qs = getLanguageFromUrl("/search?filters=W3sidHlwZSI6ImluZHVzdHJ5IiwidGV4dCI6Ik1lYXQiLCJjaGlsZHJlbnMiOltdLCJpZCI6ImQ4OTczZjQwLTczMGQtMTFlOC04NGQ2LWJkNDZmMWQwYTI4YiJ9XQ==");
    expect(qs).toBe("");
  });

  it("should return correct language when language is defined", () => {
    const qs = getLanguageFromUrl("/searchsdf");
    expect(qs).toBe("");
  });

  it("should return correct language when language is defined", () => {
    const qs = getLanguageFromUrl("/is/searchsdf");
    expect(qs).toBe("is");
  });

  it("should return correct language when language is defined 2", () => {
    const qs = getLanguageFromUrl("/pt/searchsdf");
    expect(qs).toBe("pt");
  });

  it("should return default language when language is not supported", () => {
    const qs = getLanguageFromUrl("/fdsf/searchsdf");
    expect(qs).toBe("");
  });
});
