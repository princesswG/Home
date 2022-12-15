import React from "react";

export default function Search({ contacts }){
    return(
        <>
    <div id="search-results">
      <h3>{helsinkifinland.length} results found</h3>
      {helsinkifinland.map((contact) => {
        return (
          <div className="search-content">
            <div className="search-item">
              <div className="avatar">
                <img src={contact.img_url} width={40} alt={contact.name} />
              </div>
              <div className="content">
                <h4>{contact.name}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
        </>
    )
}