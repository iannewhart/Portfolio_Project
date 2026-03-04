import {useEffect, useState} from "react";
import '../css/Admin.css'

function Admin(){
    const [videoList, setVideoList] = useState([]);
    const [title, setTitle] = useState('');
    const [style, setStyle] = useState('');
    const [url, setUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [editingTitle, setEditingTitle] = useState(null);

    const handleEdit = (video) => {
        setEditingTitle(video.title);
        setTitle(video.title);
        setStyle(video.style);
        setUrl(video.url);
        setThumbnailUrl(video.thumbnail_Url);
    };

    const handleDelete = async (title) => {
        await fetch(`${process.env.REACT_APP_API_URL}/media/delete?title=${encodeURIComponent(title)}`, {
            method: 'DELETE'
        });
        setVideoList(videoList.filter(v => v.title !== title));
    };

    const submitMedia = async () => {
        if (editingTitle) {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/media/${encodeURIComponent(editingTitle)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, style, url, thumbnail_Url: thumbnailUrl }),
            });
            const result = await response.json();
            setVideoList(videoList.map(v => v.title === editingTitle ? result : v));
            setEditingTitle(null);
            setTitle('');
            setStyle('');
            setUrl('');
            setThumbnailUrl('');
        } else {
            try {
                const newVideo = { title, style, url, thumbnail_Url: thumbnailUrl };
                const response = await fetch(`${process.env.REACT_APP_API_URL}/media/post`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newVideo),
                });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const result = await response.json();
                setVideoList([...videoList, result]);
                setTitle('');
                setStyle('');
                setUrl('');
                setThumbnailUrl('');
            } catch (error) {
                console.error("Error submitting data:", error);
            }
        }
    };

    useEffect(() => {
        const fetchVideoList = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/media/media/all`);
                const result = await response.json();
                setVideoList(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchVideoList();
    }, []);

    return (
        <div className="admin-container">
            <h2>{editingTitle ? 'Edit Video' : 'Add New Video'}</h2>
            <form>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Style:</label>
                    <select value={style} onChange={(e) => setStyle(e.target.value)} required>
                        <option value="">Select style</option>
                        <option value="branding">Branding</option>
                        <option value="social">Social</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>URL:</label>
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Thumbnail URL:</label>
                    <input type="text" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} required />
                </div>
                <button type="button" className="admin-submit" onClick={submitMedia}>
                    {editingTitle ? 'Update Video' : 'Add Video'}
                </button>
            </form>
            <div className="admin-video-list">
                <h2>Existing Videos</h2>
                {videoList.map((video) => (
                    <div key={video.id} className="admin-video-item">
                        <div className="admin-video-info">
                            <p><strong>{video.title}</strong></p>
                            <p>{video.style}</p>
                        </div>
                        <div className="admin-video-actions">
                            <button className="admin-edit-btn" onClick={() => handleEdit(video)}>Edit</button>
                            <button className="admin-delete-btn" onClick={() => handleDelete(video.title)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;