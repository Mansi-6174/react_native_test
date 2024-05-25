export interface ApiResponse {
  status: boolean;
  message: string;
}

export interface PayloadApiResponse<P> extends ApiResponse {
  payload: P;
}

export interface LoginResponse {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  token: string,
};