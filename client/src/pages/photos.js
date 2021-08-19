import React, { useEffect, useState } from 'react';
import '../App.css';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';

function Photos() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="App">
          <div className="tags">
            <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
            <TagButton name="drinks" tagActive={tag === 'drinks' ? true : false} handleSetTag={setTag} /> /
            <TagButton name="foods" tagActive={tag === 'foods' ? true : false} handleSetTag={setTag} /> /
          </div>
          <SRLWrapper>
            <div className="photo_container">
              {filteredImages.map(image => (
                <div key={image.id} className="image-card">
                  <a href={`/images/${image.imageName}`}>
                    <img className="image" src={`/images/${image.imageName}`} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </SRLWrapper>
        </div>
      </div>
    </div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};


export default Photos;