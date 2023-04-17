/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type main = typeof import('./pages/main.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, main: main }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
