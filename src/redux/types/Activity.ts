export interface ActivityState {
  isLoading: boolean;
  error: ModalErrorState;
}

interface ModalErrorState {
  title: string | null;
  message: string | null;
  buttonColor: string | null;
}
