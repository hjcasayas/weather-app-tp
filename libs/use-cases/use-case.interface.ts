export interface IUseCase<IInput = any, IOutput = any> {
  execute: (params: IInput) => IOutput;
}
