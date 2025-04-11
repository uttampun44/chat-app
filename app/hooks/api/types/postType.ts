export default interface postType {
    message: string,
    data: {
        errors: Record<string, string>
        message: string
    }
    status: number
}