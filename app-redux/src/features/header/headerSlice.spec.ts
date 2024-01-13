// headerSlice.spec.ts
import headerReducer, { setTitle } from "./headerSlice";

describe("header reducer", () => {
  const initialState = {
    title: 'Mi Página',
    // Inicializa otros campos del estado si es necesario
  };

  it("should handle initial state", () => {
    expect(headerReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setTitle", () => {
    const newTitle = 'Nuevo Título';
    const actual = headerReducer(initialState, setTitle(newTitle));
    expect(actual.title).toEqual(newTitle);
  });
});
