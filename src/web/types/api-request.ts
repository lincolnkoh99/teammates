export interface ErrorReportRequest {
	requestId: string,
	subject: string,
	content: string,
}

export enum Intent {
	FULL_DETAIL,
	INSTRUCTOR_RESULT,
	STUDENT_RESULT,
	STUDENT_SUBMISSION,
	INSTRUCTOR_SUBMISSION,
}

export enum EmailType {
	STUDENT_COURSE_JOIN = '0',
	FEEDBACK_SESSION_REMINDER = '1'
}

export interface AccountCreateRequest {

}

export interface StudentsEnrollRequest {
	studentEnrollRequests: any[];
}

export interface StudentEnrollRequest {
	name: string;
	email: string;
	section: string;
	team: string;
	commnets: string;
}
