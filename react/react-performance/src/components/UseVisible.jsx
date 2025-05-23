import React, { useState, useCallback } from 'react'

const UseVisible = (initialVisibility = false) => {

    const [isVisible, setIsVisible] = useState(initialVisibility);

    const show = useCallback(() => {
        setIsVisible(true);
    }, [])

    const hide = useCallback(() => {
        setIsVisible(false);
    }, []);

    const toggle = useCallback(() => {
        setIsVisible(prevState => !prevState)
    }, [])

    return {
        isVisible, show, hide, toggle
    }

}

export default UseVisible
