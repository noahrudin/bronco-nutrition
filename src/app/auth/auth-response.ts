export interface AuthResponse {
	user: {
	id: number,
	name: string,
	email: string,
	access_tok: string,
	expires_dur: number
	}
}
