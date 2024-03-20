import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import { Theme } from '../../theme/theme'

interface HeaderProps {
    name: string
}

const Header: React.FC<HeaderProps> = ({ name }) => {
    const theme = useTheme() as Theme // 타입 인자를 제거합니다.

    return (
        <header>
            <h1>{name}</h1>
            <div style={{ color: theme.colors.primary }}>Hello, Emotion!</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/signin">signin</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
