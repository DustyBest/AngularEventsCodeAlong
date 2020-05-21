import { SessionListComponent } from './session-list.component'
import { ISession } from '../shared/event.model'

describe('SessionListComponent', () => {
    let component: SessionListComponent
    let mockAuthService, mockVoterService

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService)
    })

    describe('ngOnChanges', () => {

        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]>[
                {name: 'session 1', level: 'intermediate'},
                {name: 'session 3', level: 'advanced'},
                {name: 'session 6', level: 'intermediate'},
                {name: 'session 9', level: 'intermediate'},
                {name: 'session 4', level: 'beginner'}
            ]
            component.filterBy = 'intermediate'
            component.sortBy = 'name'
            component.eventId = 3

            component.ngOnChanges()

            expect(component.visibleSessions.length).toBe(3)
        })
    })


    describe('ngOnChanges', () => {

        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]>[
                {name: 'session 1', level: 'intermediate'},
                {name: 'session 3', level: 'advanced'},
                {name: 'session 6', level: 'intermediate'},
                {name: 'session 9', level: 'intermediate'},
                {name: 'session 4', level: 'beginner'}
            ]
            component.filterBy = 'all'
            component.sortBy = 'name'
            component.eventId = 3

            component.ngOnChanges()

            expect(component.visibleSessions.length).toBe(5)
            expect(component.visibleSessions[4].name).toBe('session 9')
        })
    })


})