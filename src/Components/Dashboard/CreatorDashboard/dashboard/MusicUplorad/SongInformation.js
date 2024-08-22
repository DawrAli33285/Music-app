
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import "./musicuploard.css";

const SongInformation = ({ data, setFormData }) => {
    const [songInfo, setSongInfo] = useState(data);

    useEffect(() => {
        setSongInfo(data);
    }, [data]);
    console.log('songInfo :>> ', songInfo);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setSongInfo((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setSongInfo((prev) => ({
    //         ...prev,
    //         [name]: Array.isArray(prev[name]) ? [value] : value,  // Convert to array if it's one of the fields that expects an array
    //     }));
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'languages' || name === 'genres' || name === 'moods') {
            // If it is a select for multiple items, update as an array
            setSongInfo((prev) => ({
                ...prev,
                [name]: [...prev[name], value].filter(Boolean),  // Ensure values are not empty
            }));
        } else {
            setSongInfo((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    
    useEffect(() => {
        setFormData(songInfo);
    }, []);
    const handleBlur = (e) => {
        setFormData(songInfo);
    }

    return (
        <div>
            <h2>Song Information</h2>
            <Form>
                <div className="d-flex">
                    <Form.Check
                        type="radio"
                        id="SONG"
                        name="music_category"
                        label="Song"
                        value="SONG"
                        checked={songInfo?.music_category === "SONG"}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="radio"
                        id="INSTRUMENTAL"
                        name="music_category"
                        label="Instrumental"
                        value="INSTRUMENTAL"
                        checked={songInfo?.music_category === "INSTRUMENTAL"}
                        onChange={handleChange}
                    />
                </div>

                <Form.Group controlId="ownerName">
                    <Form.Label className="statement_form">Copyright owner name </Form.Label>
                    <Form.Control
                        name="owner_name"
                        placeholder="Enter name"
                        type="text"
                        value={songInfo?.owner_name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="musicLink">
                    <Form.Label className="statement_form">Upload music </Form.Label>
                    <Form.Control
                        name="upload_music_link"
                        placeholder="Enter link from platform (Ex: Spotify, YouTube, iMusic, etc.)"
                        type="text"
                        value={songInfo?.upload_music_link}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="cover_template_link">
                    <Form.Label className="statement_form">Upload cover template </Form.Label>
                    <Form.Control
                        name="cover_template_link"
                        type="text"
                        placeholder="Enter link from platform (Ex: Spotify, YouTube, iMusic, etc.)"
                        value={songInfo?.cover_template_link}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="music_name">
                    <Form.Label className="statement_form">Music name </Form.Label>
                    <Form.Control
                        name="music_name"
                        type="text"
                        placeholder="Enter music name"
                        value={songInfo?.music_name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="artist_name">
                    <Form.Label className="statement_form">Artist name </Form.Label>
                    <Form.Control
                        name="artist_name"
                        type="text"
                        placeholder="Enter artist name"
                        value={songInfo?.artist_name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="release_date">
                    <Form.Label>Month & year of release </Form.Label>
                    <Form.Control
                        name="release_date"
                        placeholder="Select date"
                        type="date"
                        value={songInfo?.release_date}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="languages">
                    <Form.Label className="statement_form">Select language</Form.Label>
                    <div className="relative">
                        <Form.Control
                            as="select"
                            name="languages"
                            value={songInfo?.languages || []}
                            onChange={handleChange}
                            // onBlur={handleBlur}
                            required
                            className="custom-select"
                        // as="select"
                        // name="languages"
                        // value={songInfo?.languages}
                        // onChange={(e) => {
                        //     const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
                        //     setSongInfo((prev) => ({ ...prev, languages: selectedOptions }));
                        // }}
                        // multiple // Allows multiple selection
                        // required
                        // className="custom-select"
                        >
                            <option value="">Select language</option>
                            <option value={1}>Malyalam</option>
                            <option value={2}>Tamil</option>
                            <option value={3}>Hindi</option>
                            {/* <option value={4}>Armenian</option>
                            <option value={5}>Basque</option>
                            <option value={6}>Bengali</option>
                            <option value={7}>Bulgarian</option>
                            <option value={8}>Catalan</option>
                            <option value={9}>Cambodian</option>
                            <option value={10}>Chinese (Mandarin)</option>
                            <option value={11}>Croatian</option>
                            <option value={12}>Czech</option>
                            <option value={13}>Danish</option>
                            <option value={14}>Dutch</option>
                            <option value={15}>English</option>
                            <option value={16}>Estonian</option>
                            <option value={17}>Fiji</option>
                            <option value={18}>Finnish</option>
                            <option value={19}>French</option>
                            <option value={20}>Georgian</option>
                            <option value={21}>German</option>
                            <option value={22}>Greek</option>
                            <option value={23}>Gujarati</option>
                            <option value={24}>Hebrew</option>
                            <option value={25}>Hindi</option>
                            <option value={26}>Hungarian</option>
                            <option value={27}>Icelandic</option>
                            <option value={28}>Indonesian</option>
                            <option value={29}>Irish</option>
                            <option value={30}>Italian</option>
                            <option value={31}>Japanese</option>
                            <option value={32}>Javanese</option>
                            <option value={33}>Korean</option>
                            <option value={34}>Latin</option>
                            <option value={35}>Latvian</option>
                            <option value={36}>Lithuanian</option>
                            <option value={37}>Macedonian</option>
                            <option value={38}>Malay</option>
                            <option value={39}>Malayalam</option>
                            <option value={40}>Maltese</option>
                            <option value={41}>Maori</option>
                            <option value={42}>Marathi</option>
                            <option value={43}>Mongolian</option>
                            <option value={44}>Nepali</option>
                            <option value={45}>Norwegian</option>
                            <option value={46}>Persian</option>
                            <option value={47}>Polish</option>
                            <option value={48}>Portuguese</option>
                            <option value={49}>Punjabi</option>
                            <option value={50}>Quechua</option>
                            <option value={51}>Romanian</option>
                            <option value={52}>Russian</option>
                            <option value={53}>Samoan</option>
                            <option value={54}>Serbian</option>
                            <option value={55}>Slovak</option>
                            <option value={56}>Slovenian</option>
                            <option value={57}>Spanish</option>
                            <option value={58}>Swahili</option>
                            <option value={59}>Swedish</option>
                            <option value={60}>Tamil</option>
                            <option value={61}>Tatar</option>
                            <option value={62}>Telugu</option>
                            <option value={63}>Thai</option>
                            <option value={64}>Tibetan</option>
                            <option value={65}>Tonga</option>
                            <option value={66}>Turkish</option>
                            <option value={67}>Ukrainian</option>
                            <option value={68}>Urdu</option>
                            <option value={69}>Uzbek</option>
                            <option value={70}>Vietnamese</option>
                            <option value={71}>Welsh</option>
                            <option value={72}>Xhosa</option> */}


                        </Form.Control>
                        <svg
                            className="custom-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </Form.Group>

                <Form.Group controlId="genres">
                    <Form.Label className="statement_form">Select Genre</Form.Label>
                    <div className="relative">
                        <Form.Control
                            as="select"
                            name="genres"
                            value={songInfo?.genres || []}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="custom-select"
                        >
                            <option value="">Select genre</option>
                            <option value={1}>Hip Hop</option>
                            <option value={2}>Rock</option>
                            <option value={3}>Pop</option>
                        </Form.Control>
                        <svg
                            className="custom-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </Form.Group>
                <Form.Group controlId="moods">
                    <Form.Label className="statement_form">Select mood</Form.Label>
                    <div className="relative">
                        <Form.Control
                            as="select"
                            name="moods"
                            value={songInfo?.moods || []}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="custom-select"
                        >
                            <option value="">Select mood</option>
                            <option value={1}>Uplifting</option>
                            <option value={2}>Melancholic</option>
                            <option value={3}>Calm</option>
                            {/* <option value={4}>love</option> */}
                        </Form.Control>
                        <svg
                            className="custom-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </Form.Group>


            </Form>
        </div>
    );
};

export default SongInformation;
