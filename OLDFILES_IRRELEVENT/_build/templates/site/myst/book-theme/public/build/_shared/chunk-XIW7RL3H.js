var a;(function(i){i.Article="Article",i.Notebook="Notebook"})(a||(a={}));var d="https://credit.niso.org/",t;(function(i){i.Conceptualization="Conceptualization",i.DataCuration="Data curation",i.FormalAnalysis="Formal analysis",i.FundingAcquisition="Funding acquisition",i.Investigation="Investigation",i.Methodology="Methodology",i.ProjectAdministration="Project administration",i.Resources="Resources",i.Software="Software",i.Supervision="Supervision",i.Validation="Validation",i.Visualization="Visualization",i.WritingOriginalDraft="Writing \u2013 original draft",i.WritingReviewEditing="Writing \u2013 review & editing"})(t||(t={}));var p={[t.Conceptualization]:"Ideas; formulation or evolution of overarching research goals and aims.",[t.DataCuration]:"Management activities to annotate (produce metadata), scrub data and maintain research data (including software code, where it is necessary for interpreting the data itself) for initial use and later re-use.",[t.FormalAnalysis]:"Application of statistical, mathematical, computational, or other formal techniques to analyse or synthesize study data.",[t.FundingAcquisition]:"Acquisition of the financial support for the project leading to this publication.",[t.Investigation]:"Conducting a research and investigation process, specifically performing the experiments, or data/evidence collection.",[t.Methodology]:"Development or design of methodology; creation of models.",[t.ProjectAdministration]:"Management and coordination responsibility for the research activity planning and execution.",[t.Resources]:"Provision of study materials, reagents, materials, patients, laboratory samples, animals, instrumentation, computing resources, or other analysis tools.",[t.Software]:"Programming, software development; designing computer programs; implementation of the computer code and supporting algorithms; testing of existing code components.",[t.Supervision]:"Oversight and leadership responsibility for the research activity planning and execution, including mentorship external to the core team.",[t.Validation]:"Verification, whether as a part of the activity or separate, of the overall replication/reproducibility of results/experiments and other research outputs.",[t.Visualization]:"Preparation, creation and/or presentation of the published work, specifically visualization/data presentation.",[t.WritingOriginalDraft]:"Preparation, creation and/or presentation of the published work, specifically writing the initial draft (including substantive translation).",[t.WritingReviewEditing]:"Preparation, creation and/or presentation of the published work by those from the original research group, specifically critical review, commentary or revision \u2013 including pre- or post-publication stages."},s=Object.keys(p),f={writing:t.WritingOriginalDraft,editing:t.WritingReviewEditing,review:t.WritingReviewEditing,analysis:t.FormalAnalysis,funding:t.FundingAcquisition,admin:t.ProjectAdministration,administration:t.ProjectAdministration};function c(i){return i.trim().toLowerCase().replaceAll("z","s").split("").reduce((n,e)=>{if(e.match(/([a-z])/))return[...n,e];let o=n[n.length-1];return o?.match(/([a-z])/)?[...n,"-"]:n},[]).join("")}var g=Object.fromEntries(s.map(i=>[c(i),i]));function r(i,n){var e,o;if(i){if(s.includes(i))return i;if(!n?.strict)return(o=(e=g[c(i)])!==null&&e!==void 0?e:f[i.toLowerCase().trim()])!==null&&o!==void 0?o:void 0}}function m(i,n){return i?!!r(i,n):!1}function h(i,n){let e=r(i,n);if(!e)return;let o=e.toLowerCase().replace("\u2013 ","").replace("& ","").replaceAll(" ","-");return`${d}contributor-roles/${o}/`}var z={validate:m,normalize:r,buildUrl:h};var v="https://orcid.org",y="^([0-9]{4}-){3}[0-9]{3}[0-9X]$",w="^((http(s)?://)?(www.)?orcid.org/)?([0-9]{4}-){3}[0-9]{3}[0-9X]$";function l(i,n){return!!i?.match(n?.strict?y:w)}function u(i,n){if(!(!i||!l(i,n)))return i.replace(/^(https?:\/\/)?(www\.)?orcid\.org\//,"")}function x(i,n){let e=u(i,n);if(e)return`${v}/${e}`}var O={validate:l,normalize:u,buildUrl:x};export{a,d as b,r as c,m as d,h as e,z as f,O as g};
