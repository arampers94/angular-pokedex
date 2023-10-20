export interface State {
  getMoveLoading: boolean;
  getMoveFailure: any;
}

export const initialState: State = {
  getMoveLoading: false,
  getMoveFailure: null,
}