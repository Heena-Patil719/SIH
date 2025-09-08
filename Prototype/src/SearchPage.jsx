import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import "./searchPage.css";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("NAMASTE");
  const navigate = useNavigate();

  const data = [
    {
      id: "NAM001.001",
      category: "Ayurveda",
      title: "Vata Dosha Prakopa",
      description: "Aggravation of Vata dosha causing movement disorders",
      mappings: {
        namaste: "NAM001.001",
        who: "ICD-11 TM2: TM-AA01.0",
        biomedicine: "M79.3",
      },
    },
    {
      id: "NAM002.015",
      category: "Ayurveda",
      title: "Pitta Vriddhi",
      description: "Increased Pitta dosha with heat-related symptoms",
      mappings: {
        namaste: "NAM002.015",
        who: "ICD-11 TM2: TM-AA02.1",
        biomedicine: "K30",
      },
    },
    {
      id: "SID003.007",
      category: "Siddha",
      title: "Azhal Kuttram",
      description: "Fire humor imbalance in Siddha system",
      mappings: {
        namaste: "SID003.007",
        who: "ICD-11 TM2: TM-ST03.2",
        biomedicine: "K59.1",
      },
    },
    {
      id: "TM-AA01.0",
      category: "Level 4",
      title: "Constitutional type wind predominance disorders",
      description: "Traditional medicine disorders related to wind element",
      parent: "TM-AA",
      mappings: {
        namaste: "TM-AA01.0",
        who: "TM-AA01.0",
        biomedicine: "Various",
      },
    },
    {
      id: "TM-ST03.2",
      category: "Level 4",
      title: "Fire humor excess syndromes",
      description: "Disorders caused by excess fire humor",
      parent: "TM-ST03",
      mappings: {
        namaste: "TM-ST03.2",
        who: "TM-ST03.2",
        biomedicine: "Various",
      },
    },
  ];

  const filtered = data.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.id.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase());

    if (activeTab === "NAMASTE") {
      return matchesSearch && (item.id.startsWith("NAM") || item.id.startsWith("SID"));
    }
    if (activeTab === "WHO") {
      return matchesSearch && item.id.startsWith("TM-");
    }
    if (activeTab === "Biomedicine") {
      return matchesSearch;
    }

    return matchesSearch;
  });

  return (
    <div className="search-container">
      <div className="header">
        <h1>Search Browser</h1>
        <p>Search and explore NAMASTE codes and WHO international terminologies</p>
      </div>

      <div className="search-bar">
        <div className="search-input-container">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search codes, terms, descriptions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button className="filter-btn">
          <Filter size={18} />
        </button>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "NAMASTE" ? "active" : ""}
          onClick={() => setActiveTab("NAMASTE")}
        >
          NAMASTE Codes
        </button>
        <button
          className={activeTab === "WHO" ? "active" : ""}
          onClick={() => setActiveTab("WHO")}
        >
          WHO ICD-11 TM2
        </button>
        <button
          className={activeTab === "Biomedicine" ? "active" : ""}
          onClick={() => setActiveTab("Biomedicine")}
        >
          Biomedicine
        </button>
      </div>

      <div className="results">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-content">
              <h3>
                {activeTab === "Biomedicine"
                  ? "Biomedicine terminology browser will be populated with ICD-11 Biomedicine codes"
                  : "No results found"}
              </h3>
              {activeTab === "Biomedicine" && <p>Integrated via WHO ICD-API</p>}
            </div>
          </div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="card">
              <div className="card-header">
                <span className="code">{item.id}</span>
                <span
                  className={
                    item.category === "Level 4" ? "level-4" : "tag"
                  }
                >
                  {item.category}
                </span>
                <div style={{ marginLeft: "auto" }}>
                  <Search size={16} color="#666" />
                </div>
              </div>

              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>

              {item.parent && (
                <div className="parent-info">
                  <span className="parent-label">Parent:</span>
                  <span className="parent-code">{item.parent}</span>
                </div>
              )}

              {activeTab === "NAMASTE" && (
                <div className="code-mappings">
                  <h4>Code Mappings</h4>
                  <div className="mappings">
                    <span className="mapping">{item.mappings.who}</span>
                    <span className="mapping">
                      Biomedicine {item.mappings.biomedicine}
                    </span>
                  </div>
                </div>
              )}

              <button
                className="view-btn"
                onClick={() => navigate(`/details/${item.id}`)}
              >
                View Mapping →
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
