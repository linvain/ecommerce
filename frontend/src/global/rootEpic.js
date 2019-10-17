import {filter, mapTo} from 'rxjs/operators'

export const rootEpic = action$ => action$.pipe(
	filter(action => action.type === 'PING'),
	mapTo({type: 'PONG'}),
)
