import React from 'react'

import { ItemContainer, HeadContainer, ImgContainer, ButtonsContainer} from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
      <ImgContainer>
        <img src={repo.owner.avatar_url}   alt='avatar' />
      </ImgContainer>
      <HeadContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
      </HeadContainer>
      <ButtonsContainer>
        <a href={repo.html_url} rel="noreferrer" target="_blank" className='visitar'>Ver repositório</a><br />
        <a href='#' rel="noreferrer" className="remover">Remover</a>
      </ButtonsContainer>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
