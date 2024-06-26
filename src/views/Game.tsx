import { useState, useEffect, useReducer } from 'react'
import { Currencies } from '@modules'
import * as Core from '@core'
import * as Controller from '@controllers'
import * as Modules from '@modules/index'
import * as SharedTypes from '@shared/types'
import * as SharedConstants from '@shared/constants'
import * as SharedHelpers from '@shared/helpers'
import * as ViewTypes from '@views/_types'
import Content from '@content'

function Game({ data }: ViewTypes.DataProps) {
    const [state, dispatch] = useReducer(Core.Dispatcher.reducer, data)

    useEffect(() => {
        Controller.Achievements.give(dispatch, 'TEST')
        Controller.Upgrades.upgrade(dispatch, 'BEST')
        console.log(state)
        // Controllers.Currencies.add(dispatch, Currencies.types.Currencies.GOLD, 100)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /**
     * Gameplay Loop
     */
    useEffect(() => {
        // Required Variables and Tracking
        const fixedUpdateInSeconds = 1
        const fixedUpdateRate = 1 / fixedUpdateInSeconds
        let frameId = 0
        let prevFrameTime = 0
        let accumulatedLagTime = 0

        // Offline Progress & Catchup
        if (SharedConstants.OFFLINE_PROGRESS) {
            // Implement Offline Progress
        }

        // Stopping Gameplay Loop Handler
        const stop = () => {
            cancelAnimationFrame(frameId)
        }

        // Ticks
        let currentFrameTime = 0
        let lastSave = 0
        const tick = (currentFrameTime: number) => {
            try {
                frameId = requestAnimationFrame(tick)

                // Calculate Lag & Delta Time
                const deltaMS = currentFrameTime - prevFrameTime
                const deltaTime = Math.min(fixedUpdateRate, deltaMS / 1000)
                accumulatedLagTime += deltaTime
                lastSave += deltaTime

                // Handle onFixedUpdate Logic
                while (accumulatedLagTime >= fixedUpdateRate) {
                    accumulatedLagTime -= fixedUpdateRate
                    Core.Dispatcher.fixedUpdate(dispatch, deltaTime)
                }

                // Handle onUpdate Logic
                Core.Dispatcher.update(dispatch, deltaTime)

                // Check if save is needed
                if (lastSave >= SharedConstants.AUTO_SAVE_TIMER_MINUTES * 60) {
                    Core.Saves.save(state)
                    lastSave = 0
                }

                // Set Frame Time
                prevFrameTime = currentFrameTime
            } catch (err) {
                stop()
                throw err
            }
        }

        tick(currentFrameTime)

        return stop
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /**
     * Save on Reload & Safe Exit
     */
    useEffect(() => {
        const handler = () => {
            Core.Saves.save(state)
        }

        window.addEventListener('beforeunload', handler)

        return () => {
            window.removeEventListener('beforeunload', handler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <div>
            <h1>{SharedConstants.PROJECT_NAME}</h1>
            <p>Gold: {SharedHelpers.NumberFormat.whole(state.currencies.gold)}</p>
            <button
                onClick={() => {
                    const payload: Currencies.actions.addPayloadType = {
                        currency: Currencies.types.Currencies.GOLD,
                        amount: 10,
                    }
                    dispatch({ func: Currencies.actions.add, payload: payload })
                }}
            >
                Click
            </button>
            <p>Currency: {SharedHelpers.NumberFormat.currency(123456.9876)}</p>
            <p>Whole: {SharedHelpers.NumberFormat.whole(123456.9876)}</p>
            <p>Engineering: {SharedHelpers.NumberFormat.engineering(123456.9876)}</p>
            <p>Scientific: {SharedHelpers.NumberFormat.scientific(123456.9876)}</p>
            <p>Compact: {SharedHelpers.NumberFormat.standardCompact(123456.9876)}</p>
            <p>Standard: {SharedHelpers.NumberFormat.standard(123456.9876)}</p>
            <h1>Very Large Numbers</h1>
            <p>Currency: {SharedHelpers.NumberFormat.currency(1234561234567.9876)}</p>
            <p>Whole: {SharedHelpers.NumberFormat.whole(1234561234567.9876)}</p>
            <p>Engineering: {SharedHelpers.NumberFormat.engineering(1234561234567.9876)}</p>
            <p>Scientific: {SharedHelpers.NumberFormat.scientific(1234561234567.9876)}</p>
            <p>Compact: {SharedHelpers.NumberFormat.standardCompact(12345612343434567.9876)}</p>
            <p>Standard: {SharedHelpers.NumberFormat.standard(1234561234567.9876)}</p>
            <h1>Time</h1>
            <p>Long: {SharedHelpers.NumberFormat.timeLong(1)}</p>
            <p>Long: {SharedHelpers.NumberFormat.timeLong(60)}</p>
            <p>Long: {SharedHelpers.NumberFormat.timeLong(3600)}</p>
            <p>Short: {SharedHelpers.NumberFormat.timeShort(1)}</p>
            <p>Short: {SharedHelpers.NumberFormat.timeShort(60)}</p>
            <p>Short: {SharedHelpers.NumberFormat.timeShort(3600)}</p>
        </div>
    )
}

export default Game
