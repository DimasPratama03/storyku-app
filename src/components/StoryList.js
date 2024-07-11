import React from 'react';
import './StoryList.css';

function StoryList() {
  return (
    <div>
      <h2>List Story</h2>
      <div className="search-add-container">
        <input type="text" placeholder="Search by writer's name/title story" />
        <div className="button-group">
          <button className="search-button">Search</button>
          <button className="add-story">Add Story</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Writes</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Moon that...</td>
            <td>Rara</td>
            <td>Technology</td>
            <td><button className="tag-button">Tag</button></td>
            <td><button className="status-button">Status</button></td>
            <td><button className="action-button">...</button></td>
          </tr>
          {/* Tambahkan baris lainnya sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
}

export default StoryList;
