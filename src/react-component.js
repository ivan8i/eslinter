import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Avatar.scss'

const arrayItems = [
  { name: 'One', obj: { aaa: 'aaa', bbb: 'bbb' }, boo: false },
  { name: 'two', obj: { aaa: 'aaa', bbb: 'bbb' }, boo: true },
  { name: 'Tiga', obj: { aaa: 'zzz', bbb: 'yyy' }, boo: false },
]

const Avatar = ({ src, size, className, frameWidth, rounded }) => {
  let ai = {}
  frameWidth !== undefined ? (ai['borderWidth'] = `${frameWidth / 16}em`) : null
  return (
    <div
      className={classNames(
        'avatar',
        className,
        frameWidth && 'frame',
        rounded && 'round'
      )}
      style={{ width: size }}
    >
      <div className="avatar-image" style={ai}>
        <img src={src} />
      </div>
      {arrayItems.map((item, index) => {
        return (
          <div key={`item-key-${index}`}>
            <h5>{item.name}</h5>
            <p>{item.boo ? 'Yes' : 'No'}</p>
            {Object.prototype.hasOwnProperty.call(item.obj, 'aaa') ? (
              <span>{item.obj.aaa}</span>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  frameWidth: PropTypes.number,
  rounded: PropTypes.bool,
}

export default Avatar
