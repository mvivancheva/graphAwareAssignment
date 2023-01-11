export interface ErrorResult {
    code: number,
    message: string
}
export interface ResponseResult<Type> {
    payload?: Type,
    isError: boolean,
    error?: ErrorResult
}