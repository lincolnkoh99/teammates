import { SearchCommentsTable } from '../app/pages-instructor/instructor-search-page/comment-result-table/comment-result-table.component'

export interface TimeZones {
	timestamp: number;
	version: string;
	offsets: Record<string, number>;
}

export interface OngoingSessions {
	totalOngoingSessions: number;
	totalOpenSessions: number;
	totalClosedSessions: number;
	totalAwaitingSessions: number;
	totalInstitutes: number;
	sessions: { [key: string]: OngoingSession[] };
}

export interface OngoingSession {
	startTime: number;
	endTime: number;
	feedbackSessionName: string;
	courseId: string;
}

export interface FeedbackSessionStats {
	expectedTotal: number;
	submittedTotal: number;
}

export interface RegenerateStudentCourseLinks {
	message: string;
	newRegistrationKey: string
}

export interface Email {
	content: string;
	subject: string;
	recipient: string;
}

export interface Courses {
	courses: Course[]
}

export interface Course {
	courseId: string;
	courseName: string;
	timeZone: string;
}

export interface Account {
	googleId: string;
	name: string;
	email: string;
	isInstructor: boolean;
	institute: string;
	createdAtTimeStamp: number;
}

export interface JoinLink {
	joinLink: string;
}

export interface MessageOutput {
	message: string;
}

export interface Students {
	students: Student[];
}

export interface Student {
	key: string;
	name: string;
	email: string;
	courseId: string;
	sectionName: string;
	institute: string;
	googleId: string;
	teamName: string;
	comments: string;
	joinState: JoinState;
	lastName: string;
}

export enum JoinState {
	NOT_JOINED = 'NOT_JOINED',
	JOINED = 'JOINED'
}

export interface InstructorPrivilege {
	canModifyStudent: boolean;
	canViewStudentInSections: boolean;
	canModifyInstructor: boolean;
}

export interface Instructors {
	instructors: Instructor[]
}

export interface Instructor {
	key: string;
	email: string;
	courseId: string;
	institute: string;
	googleId: string;
	name: string;
	role: InstructorPermissionRole;
}

export enum InstructorPermissionRole {
	INSTRUCTOR_PERMISSION_ROLE_COOWNER,
	INSTRUCTOR_PERMISSION_ROLE_MANAGER,
	INSTRUCTOR_PERMISSION_ROLE_OBSERVER,
	INSTRUCTOR_PERMISSION_ROLE_TUTOR,
	INSTRUCTOR_PERMISSION_ROLE_CUSTOM,
}

export interface CommentSearchResult extends SearchCommentsTable {

}

export interface FeedbackSessions {
	feedbackSessions: FeedbackSession[];
}

export interface FeedbackSession {
	courseId: string;
	feedbackSessionName: string;
	timeZone: string;
	submissionStartTimestamp: number;
	submissionEndTimestamp: number;
	customResponseVisibleTimestamp: number;
	customSessionVisibleTimestamp: number;
	isPublishedEmailEnabled: boolean;
	isClosingEmailEnabled: boolean;
	responseVisibleSetting: ResponseVisibleSetting;
	sessionVisibleSetting: SessionVisibleSetting;
	publishStatus: FeedbackSessionPublishStatus;
	submissionStatus: FeedbackSessionSubmissionStatus;
	gracePeriod: number;
	instructions: string;
	privileges: InstructorPrivilege;
}

export interface CommentSearchResults {
	searchResults: string[];
}

export interface StudentProfile {

}

export interface SessionResults {
	questions: QuestionOutput[];
}

export interface QuestionOutput {
	allResponses: any[];
	feedbackQuestion: { questionNumber: number };
}

export interface ResponseOutput {
	responseId: string;
	instructorComments: any[];
	recipientEmail: string;
	isMissingResponse: boolean;
	giverEmail: string;
}

export enum Gender {
	MALE,
	FEMALE,
	OTHER
}

export enum SessionVisibleSetting {
	AT_OPEN,
	CUSTOM
}

export enum ResponseVisibleSetting {
	AT_VISIBLE,
	LATER,
	CUSTOM
}

export enum NumberOfEntitiesToGiveFeedbackToSetting {
	UNLIMITED = 'UNLIMITED',
	CUSTOM = 'CUSTOM'
}

export interface HasResponses {
	hasResponses: boolean
}

export enum FeedbackVisibilityType {
	RECIPIENT = 'RECIPIENT',
	INSTRUCTORS = 'INSTRUCTORS',
	GIVER_TEAM_MEMBERS = 'GIVER_TEAM_MEMBERS',
	RECIPIENT_TEAM_MEMBERS = 'RECIPIENT_TEAM_MEMBERS',
	STUDENTS = 'STUDENTS'
}

export interface FeedbackTextQuestionDetails {

}

export enum FeedbackSessionSubmissionStatus {
	OPEN = 'OPEN',
	NOT_VISIBLE = 'NOT_VISIBLE',
	VISIBLE_NOT_OPEN = 'VISIBLE_NOT_OPEN',
	GRACE_PERIOD = 'GRACE_PERIOD',
	CLOSED = 'CLOSED'
}

export enum FeedbackSessionPublishStatus{
	PUBLISHED = 'PUBLISHED',
	NOT_PUBLISHED = 'NOT_PUBLISHED',
	OPEN = 'OPEN'
}

export enum FeedbackQuestionType {
	TEXT = 'TEXT',
	NUMSCALE = 'NUMSCALE',
	CONSTSUM_OPTIONS = 'CONSTSUM_OPTIONS',
	CONSTSUM = 'CONSTSUM',
	CONSTSUM_RECIPIENTS = 'CONSTSUM_RECIPIENTS',
	RANK_OPTIONS = 'RANK_OPTIONS',
	RANK_RECIPIENTS = 'RANK_RECIPIENTS',
	CONTRIB = 'CONTRIB',
	MCQ = 'MCQ',
	MSQ = 'MSQ',
	RUBRIC = 'RUBRIC'
}

export interface FeedbackQuestions {
	questions: FeedbackQuestion[];
}

export interface FeedbackQuestion {
	feedbackQuestionId: string;
	showRecipientNameTo: FeedbackVisibilityType[];
	showGiverNameTo: FeedbackVisibilityType[];
	showResponsesTo: FeedbackVisibilityType[];
	customNumberOfEntitiesToGiveFeedbackTo: number;
	numberOfEntitiesToGiveFeedbackToSetting: NumberOfEntitiesToGiveFeedbackToSetting;
	recipientType: FeedbackParticipantType;
	giverType: FeedbackParticipantType;
	questionType: FeedbackQuestionType;
	questionDetails: string;
	questionDescription: string;
	questionBrief: string;
	questionNumber: number;
}

export enum FeedbackParticipantType {
	NONE = 'NONE',
	STUDENTS = 'STUDENTS',
	INSTRUCTORS = 'INSTRUCTORS',
	STUDENTS_EXCLUDING_SELF = 'STUDENTS_EXCLUDING_SELF',
	TEAMS_EXCLUDING_SELF = 'TEAMS_EXCLUDING_SELF',
	TEAMS = 'TEAMS',
	OWN_TEAM_MEMBERS = 'OWN_TEAM_MEMBERS',
	OWN_TEAM_MEMBERS_INCLUDING_SELF = 'OWN_TEAM_MEMBERS_INCLUDING_SELF',
	OWN_TEAM = 'OWN_TEAM'
}
