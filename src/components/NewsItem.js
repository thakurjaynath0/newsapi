import React from 'react'

const NewsItem = (props)=>{
    const { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className="badge bg-danger">{source}</span>
          </div>
          <img src={imageUrl ? imageUrl : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAMFBMVEX////MzMzJycnp6enw8PDt7e36+vrj4+P39/ff39/b29vQ0ND09PTd3d3o6OjT09Nr7EITAAADJUlEQVR4nO3c23aqMBRAUYwVBCz8/98esGi57CRgE8LmrPncUc0aCAkYswwAAAAAAAAAAAAAAAAAAAAAAAAAtMpjSz1An2tr4muvqYfp8LiYyx7M5ZF6qDa3fQo8K9xSD1b2tV+CLsJX6uGKdizQSz1cSbHnYdAdCEXqAQvq97uL6/UydeoBL+XDmzPlNa7y9ULHmyg8zF6H6PChM8e7Pg5XhR0uWsMl+IBXBhrQoEcDGvRoYGuQN1U/d2rLgBcyZQ2K17SuW/QHq6CqQV6PlxCmCfRKmhrkkVY5mhrUl3mEMOdLRQ1KYS0dZJmjp0EuJDBliFfS00C+pRLilfQ0WJwNgr1vPQ2kBOuuj76nB2oaSKeDdSeE0ny7/0BNg7t8h9XfoLuceCKoaWA5DrzTpOcV1R1BTQPL+cD3WR8mFc4IehpUYoO7+5+851WuCHoaiA8fPc8ERlNLRwQ9DaQPg+ejMJld2yMoaiAcCK3zP8wWGNYIihpk3/MI7idDizWWqeQ/1NQgq2ajcp4QhWWmJYKqBpN1k6m3HQX2CLoaZPfq50GxMbV7pSAmsJwTlDXo5ou3oqrKxnND1ZJAjqCuwSrWBGKEUzZwJJAinLGBM4EQ4YQNPAmWEc7XwJtgcYk8XYMVCeYRztZgVYJZBM0NiuUkYWWCaQTFDbqJ83zBsDrBJILeBs+1wzTChgTjCGobDMuncYRNCUYRtDZ4ryB/I2xM8HszUmmD0SL6FWFzAuUNJvcRfkayPYHuBrNH0P1QPkigusHiKfz9owSaGwhfRJjfaDx7g3DbW9Q2CLjDR2uDkJuclDYIus9LZ4OwW91UNgi8209jg9AbHhU2CL7nU1+Dj6aC52pg+V4aDWhAAxrQgAY0oAEN/vsG4WlrkDfBfwilGb7gqKZBRDSgQY8GNOjR4MgNXpOi2rNt6+8vVE+nTEfyns79eULo9v7/qQcsEDfzRWTZ6ZPUI/YBMHXAn4zLYtxNdyUI8nMS4bX7RTDubYIJffb9kk8SHPFkMLjVEZbMS/VBf1l48GiK2HwbxAAAAAAAAAAAAAAAAAAAAAAAAIBD+gcdMi0YuTIcVgAAAABJRU5ErkJggg=="} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
