import React from 'react'
import cx from '../../lib/suitcx'

export default function ChatPanel () {
  return (
    <div className={cx('Panel')}>
      <div className='top-bar'>
        <div className='top-bar-left'>
          <div className='menu-text'>
            Chat
          </div>
        </div>
      </div>
    </div>
  )
}
