import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonService, getPokemonSpeciesService } from "../../services";

// Estilos
import { Wrapper, Content } from "./PokemonInfo.style";

import Loader from "../Loader";
import Header from "../Header";

function PokemonInfo() {
  const navigate = useNavigate();

  const [toggleState, setToggleState] = useState(1);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonInfoSpecies, setPokemonInfoSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pokemonName } = useParams();

  const [pokemonBaseStats, setPokemonBaseStats] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [eggGroups, setEggGroups] = useState([]);
  const [moves, setMoves] = useState([]);
  const [texts, setTexts] = useState("");

  const cancelAction = () => {
    navigate("/");
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    getPokemonSpeciesService(pokemonName)
      .then((res) => {
        setPokemonInfoSpecies([res?.data]);
        res?.data?.flavor_text_entries.some((flavor) => {
          if (flavor?.language?.name === "en") {
            setTexts(flavor?.flavor_text);
          }
          return null;
        });
        setEggGroups(res.data.egg_groups);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pokemonName]);

  useEffect(() => {
    getPokemonService(pokemonName)
      .then((res) => {
        setPokemonInfo([res.data]);
        setPokemonBaseStats(res.data.stats);
        setMoves(res.data.moves);
        setPokemonAbilities(res.data.abilities);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pokemonName]);

  function formatId(id) {
    if (id > 99) {
      return `#${id}`;
    } else if (id > 9) {
      return `#0${id}`;
    } else {
      return `#00${id}`;
    }
  }

  const femaleRate = pokemonInfoSpecies.map((stats) => {
    return stats.gender_rate;
  });
  const genderRatioFemale = 12.5 * femaleRate;
  const genderRatioMale = 12.5 * (8 - femaleRate);

  let captureRate;

  pokemonInfoSpecies.map((info) => {
    if (info.capture_rate > 204) {
      captureRate = "Very easy";
    } else if (info.capture_rate > 153 && info.capture_rate < 204) {
      captureRate = "Easy";
    } else if (info.capture_rate > 102 && info.capture_rate < 153) {
      captureRate = "Medium";
    } else if (info.capture_rate > 51 && info.capture_rate < 102) {
      captureRate = "Hard";
    } else if (info.capture_rate > 0 && info.capture_rate < 51) {
      captureRate = "Very hard";
    }
    return null;
  });

  return (
    <Wrapper
      className={pokemonInfo.map((info) => {
        return info.types[0].type.name;
      })}
    >
      <Content>
        <Header
          showBackButton={true}
          backToMain={cancelAction}
          setShowSearchBar={false}
        />
        {isLoading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          <div className="pokemonInfo-wrapper">
            <header className="pokemonInfo-header">
              {pokemonInfo.map((info, index) => {
                return (
                  <>
                    <div className="content" key={index}>
                      <div className="pokemonInfo-header-head">
                        <h3 className="pokemonInfo-header-name">
                          {info.name.charAt(0).toUpperCase() +
                            info.name.slice(1)}
                        </h3>
                        <div className="pokemonCard-content_span">
                          {info.types.map((type, index) => {
                            return <span key={index}>{type.type.name}</span>;
                          })}
                        </div>
                      </div>
                      <h4 className="pokemonInfo-header-number">
                        {info.id < 999 ? formatId(info.id) : `#${info.id}`}
                      </h4>
                    </div>
                    <div style={{ height: "14rem" }}></div>
                    <img
                      src={info.sprites.other["official-artwork"].front_default}
                      alt=""
                    />
                  </>
                );
              })}
            </header>
            <main className="pokemonInfo-content">
              <div className="container">
                <div className="bloc-tabs">
                  <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                    About
                  </button>
                  <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
                    Base Stats
                  </button>
                  <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                  >
                    Info
                  </button>
                  <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                  >
                    Moves
                  </button>
                </div>

                <div className="content-tabs">
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <div className="about-container">
                      <ul>
                        <li>
                          <div
                            className="about-info"
                            style={{
                              width: "100%",
                              fontSize: "1.2rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            <span>
                              {texts.charAt(0).toUpperCase() + texts.slice(1)}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        {pokemonInfo.map((info, index) => {
                          return (
                            <>
                              <li key={`${index}+ Species`}>
                                <div className="stats-type">Species</div>
                                <div className="about-info">
                                  <span>
                                    {info.species.name.charAt(0).toUpperCase() +
                                      info.name.slice(1)}
                                  </span>
                                </div>
                              </li>
                              <li key={`${index}+ Height`}>
                                <div className="stats-type">Height</div>
                                <div className="about-info">
                                  <span>{info.height / 10}m</span>
                                </div>
                              </li>
                              <li key={`${index}+ Weight`}>
                                <div className="stats-type">Weight</div>
                                <div className="about-info">
                                  <span>{info.weight / 10}kg</span>
                                </div>
                              </li>
                              <li key={`${index}+ Abilities`}>
                                <div className="stats-type">Abilities</div>
                                <div className="about-info">
                                  {pokemonAbilities.map((info) => {
                                    return (
                                      <span>
                                        {info.ability.name
                                          .charAt(0)
                                          .toUpperCase() +
                                          info.ability.name.slice(1)}{" "}
                                      </span>
                                    );
                                  })}
                                </div>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                      <ul>
                        <h2
                          style={{
                            marginTop: "1rem",
                            fontSize: "larger",
                            fontWeight: "bolder",
                          }}
                        >
                          Breeding
                        </h2>
                        {pokemonInfoSpecies.map((info, index) => {
                          return (
                            <>
                              <li key={`${index}+ Gender`}>
                                <div className="stats-type">Gender</div>
                                <div className="about-info">
                                  {femaleRate < 0 ? (
                                    <span>
                                      <svg
                                        width="21"
                                        height="32"
                                        viewBox="0 0 21 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M21 10.0455C21 4.50665 16.2906 0 10.5009 0C4.71068 0 0 4.50605 0 10.0455C0 15.1461 3.99687 19.3609 9.14989 19.9972V26.1173V26.5C9.14989 27.5 9.14989 26.7868 9.14989 27.5C9.14989 28.2132 9.14989 28 9.14989 28.5V28.6999V30.7087C9.14989 31.4218 9.75423 32 10.5009 32C11.2458 32 11.8501 31.4218 11.8501 30.7087V28.6999V28C11.8501 26.6869 11.8501 28.2132 11.8501 27.5C11.8501 26.7868 11.8501 27.5 11.8501 26.5V26.1173V19.9972C17.0038 19.3603 21 15.1461 21 10.0455ZM2.70086 10.0455C2.70086 5.93057 6.1997 2.58327 10.5009 2.58327C14.8003 2.58327 18.301 5.93057 18.301 10.0455C18.301 14.1605 14.8009 17.5078 10.5009 17.5078C6.1997 17.5078 2.70086 14.1605 2.70086 10.0455Z"
                                          fill="#9F9F9F"
                                        />
                                      </svg>
                                      100%
                                    </span>
                                  ) : (
                                    <>
                                      {" "}
                                      <span>
                                        <svg
                                          width="32"
                                          height="32"
                                          viewBox="0 0 32 32"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M30.618 0H22.8026C22.039 0 21.4205 0.598568 21.4205 1.33692C21.4205 2.07528 22.039 2.67409 22.8026 2.67409H26.4303L17.7119 11.1102C15.9439 10.0635 13.8677 9.45891 11.6481 9.45891C5.22529 9.45891 0 14.5147 0 20.7294C0 26.9446 5.22529 32 11.6481 32C18.0708 32 23.2961 26.9446 23.2961 20.7294C23.2961 18.0417 22.3171 15.5723 20.6892 13.6332L29.2367 5.36273V9.36382C29.2367 10.1022 29.8553 10.7009 30.6179 10.7009C31.3814 10.7009 32 10.1022 32 9.36382V1.33692C32.0001 0.598568 31.3815 0 30.618 0ZM11.6481 28.18C7.40256 28.18 3.94818 24.8375 3.94818 20.7293C3.94818 16.6216 7.40205 13.2793 11.6481 13.2793C15.8936 13.2793 19.3472 16.6216 19.3472 20.7293C19.3472 24.8375 15.8936 28.18 11.6481 28.18Z"
                                            fill="#6B79DA"
                                          />
                                        </svg>
                                        {genderRatioMale}%
                                      </span>
                                      <span>
                                        <svg
                                          width="21"
                                          height="32"
                                          viewBox="0 0 21 32"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M21 10.0455C21 4.50665 16.2906 0 10.5009 0C4.71068 0 0 4.50605 0 10.0455C0 15.1461 3.99687 19.3609 9.14989 19.9972V26.1173H6.48383C5.73838 26.1173 5.13404 26.6954 5.13404 27.4086C5.13404 28.1218 5.73838 28.6999 6.48383 28.6999H9.14989V30.7087C9.14989 31.4218 9.75423 32 10.5009 32C11.2458 32 11.8501 31.4218 11.8501 30.7087V28.6999H14.5162C15.2635 28.6999 15.8679 28.1218 15.8679 27.4086C15.8679 26.6954 15.2635 26.1173 14.5162 26.1173H11.8501V19.9972C17.0038 19.3603 21 15.1461 21 10.0455ZM2.70086 10.0455C2.70086 5.93057 6.1997 2.58327 10.5009 2.58327C14.8003 2.58327 18.301 5.93057 18.301 10.0455C18.301 14.1605 14.8009 17.5078 10.5009 17.5078C6.1997 17.5078 2.70086 14.1605 2.70086 10.0455Z"
                                            fill="#F4B7CC"
                                          />
                                        </svg>
                                        {genderRatioFemale}%
                                      </span>{" "}
                                    </>
                                  )}
                                </div>
                              </li>
                              <li key={` ${index}+ Egg Groups`}>
                                <div className="stats-type">Egg Groups</div>
                                <div className="about-info">
                                  {eggGroups.map((info) => {
                                    return <span>{info.name} </span>;
                                  })}
                                </div>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <ul>
                      {pokemonBaseStats.map((stats, index) => {
                        return (
                          <li key={index}>
                            <div className="stats-type">
                              {stats.stat.name.charAt(0).toUpperCase() +
                                stats.stat.name.slice(1)}
                            </div>
                            <div className="progress">
                              <div
                                className={`progressbar ${pokemonInfo.map(
                                  (info) => {
                                    return info.types[0].type.name;
                                  }
                                )}`}
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuenow="25"
                                aria-valuemax="150"
                                style={{
                                  width: `calc(100% * ${stats["base_stat"]} / 150)`,
                                }}
                              >
                                <span>{stats["base_stat"]}</span>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div
                    className={
                      toggleState === 3 ? "content  active-content" : "content"
                    }
                  >
                    <ul>
                      {pokemonInfoSpecies.map((info, index) => {
                        return (
                          <>
                            <li key={`${index}+ Habitat`}>
                              <div className="stats-type">Habitat</div>
                              <div className="about-info">
                                <span>
                                  {info.habitat === null
                                    ? "Not available"
                                    : info.habitat.name}
                                </span>
                              </div>
                            </li>
                            <li key={`${index}+ generation`}>
                              <div className="stats-type">Generation</div>
                              <div className="about-info">
                                <span>
                                  {info.generation === null
                                    ? "Not available"
                                    : info.generation.name.replace("-", " ")}
                                </span>
                              </div>
                            </li>
                            <li key={`${index}+ shape`}>
                              <div className="stats-type">Shape</div>
                              <div className="about-info">
                                <span>
                                  {info.shape === null
                                    ? "Not available"
                                    : info.shape.name}
                                </span>
                              </div>
                            </li>
                            <li key={`${index}+ Capture`}>
                              <div className="stats-type">Capture</div>
                              <div className="about-info">
                                <span>{captureRate}</span>
                              </div>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>

                  <div
                    className={
                      toggleState === 4 ? "content  active-content" : "content"
                    }
                  >
                    <ul>
                      <li>
                        <div className="about-info" style={{ width: "100%" }}>
                          {moves.map((move, index) => {
                            return (
                              <span className="moves" key={index}>
                                {move.move.name},
                              </span>
                            );
                          })}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
      </Content>
    </Wrapper>
  );
}

export default PokemonInfo;
