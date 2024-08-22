import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import "./musicuploard.css"

const SongLinks = ({ formData, setFormData }) => {
  
// Initializing state for songLinks
const [songLinks, setSongLinks] = useState([
  { link: formData?.spotifyLink || '', platform: 1 },
  { link: formData?.youtubeLink || '', platform: 2 },
  { link: formData?.gaanaLink || '', platform: 3 },
  { link: formData?.amazonLink || '', platform: 4 },
  { link: formData?.jioSaavnLink || '', platform: 5 },
  { link: formData?.wynkLink || '', platform: 6 },
  { link: formData?.appleLink || '', platform: 7 },
  { link: formData?.otherLink || '', platform: 8 },
]);

const handleChange = (e, index) => {
  const { value } = e.target;
  const updatedLinks = [...songLinks];
  updatedLinks[index].link = value; // Update the link at the specified index
  setSongLinks(updatedLinks); // Update the state with the new array
};
  useEffect(() => {
    const musicLinks = songLinks.filter(linkObj => linkObj.link.trim() !== '');
    // Set form data only with non-empty links
    setFormData({ music_links: musicLinks });
  }, [songLinks]);
//   const handleBlur = (e) => {
//     // Filter out link objects with empty links
//     const musicLinks = songLinks.filter(linkObj => linkObj.link.trim() !== '');
//     debugger
//     // Set form data only with non-empty links
//     setFormData({ music_links: musicLinks });
// };

  console.log('songLinks :>> ', songLinks);
  return (
    <div>
      <h2>Song Links</h2>
      <Form>
        <Form.Group controlId="spotifyLink">
          <Form.Label className="statement_form">Spotify link</Form.Label>
          <Form.Control
            placeholder="Enter link"
            type="text"
            value={songLinks[0]?.link || ''}
            onChange={(e) => handleChange(e, 0)}
          />
        </Form.Group>
        <Form.Group controlId="youtubeLink">
          <Form.Label className="statement_form">YouTube link</Form.Label>
          <Form.Control
            placeholder="Enter link"
            type="text"
            value={songLinks[1]?.link || ''}
            onChange={(e) => handleChange(e, 1)}
          />
        </Form.Group>
        <Form.Group controlId="gaanaLink">
          <Form.Label className="statement_form">Gaana link</Form.Label>
          <Form.Control
            placeholder="Enter link"
            type="text"
            value={songLinks[2]?.link || ''}
            onChange={(e) => handleChange(e, 2)}
          />
        </Form.Group>
        <Form.Group controlId="amazonLink">
          <Form.Label className="statement_form">Amazon Music link</Form.Label>
          <Form.Control
            placeholder="Enter link"
            type="text"
            value={songLinks[3]?.link || ''}
            onChange={(e) => handleChange(e, 3)}
          />
        </Form.Group>
        <Form.Group controlId="jioSaavnLink">
          <Form.Label className="statement_form">JioSaavn link</Form.Label>
          <Form.Control
            placeholder="Enter link"
            type="text"
            value={songLinks[4]?.link || ''}
            onChange={(e) => handleChange(e, 4)}
          />
        </Form.Group>
        <Form.Group controlId="wynkLink">
          <Form.Label className="statement_form">Wynk music link</Form.Label>
          <Form.Control
            placeholder="Enter link"
            type="text"
            value={songLinks[5]?.link || ''}
            onChange={(e) => handleChange(e, 5)}
          />
        </Form.Group>
        <Form.Group controlId="appleLink">
          <Form.Label className="statement_form">Apple Music link</Form.Label>
          <Form.Control
            placeholder="Enter link"
            type="text"
            value={songLinks[6]?.link || ''}
            onChange={(e) => handleChange(e, 6)}
          />
        </Form.Group>
        <Form.Group controlId="otherLink">
          <Form.Label className="statement_form">Other link</Form.Label>
          <Form.Control
            placeholder="Enter link"
            type="text"
            // onBlur={handleBlur}
            value={songLinks[7]?.link || ''}
            onChange={(e) => handleChange(e, 7)}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SongLinks;
