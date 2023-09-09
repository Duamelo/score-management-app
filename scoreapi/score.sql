--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: account; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.account (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    profil character varying NOT NULL,
    email character varying NOT NULL
);


ALTER TABLE public.account OWNER TO duamelo;

--
-- Name: account_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.account_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_id_seq OWNER TO duamelo;

--
-- Name: account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.account_id_seq OWNED BY public.account.id;


--
-- Name: group; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public."group" (
    id integer NOT NULL,
    name character varying NOT NULL,
    "tournamentId" integer
);


ALTER TABLE public."group" OWNER TO duamelo;

--
-- Name: group_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.group_id_seq OWNER TO duamelo;

--
-- Name: group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.group_id_seq OWNED BY public."group".id;


--
-- Name: match; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.match (
    id integer NOT NULL,
    venue character varying NOT NULL,
    code character varying NOT NULL,
    "team1Id" integer,
    "team2Id" integer,
    winner character varying,
    "phaseId" integer,
    date date NOT NULL,
    duration integer NOT NULL
);


ALTER TABLE public.match OWNER TO duamelo;

--
-- Name: match_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.match_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.match_id_seq OWNER TO duamelo;

--
-- Name: match_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.match_id_seq OWNED BY public.match.id;


--
-- Name: phase; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.phase (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    "tournamentId" integer
);


ALTER TABLE public.phase OWNER TO duamelo;

--
-- Name: phase_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.phase_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.phase_id_seq OWNER TO duamelo;

--
-- Name: phase_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.phase_id_seq OWNED BY public.phase.id;


--
-- Name: player; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.player (
    id integer NOT NULL,
    username character varying NOT NULL,
    role character varying NOT NULL,
    "teamId" integer
);


ALTER TABLE public.player OWNER TO duamelo;

--
-- Name: player_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.player_id_seq OWNER TO duamelo;

--
-- Name: player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.player_id_seq OWNED BY public.player.id;


--
-- Name: team; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.team (
    id integer NOT NULL,
    name character varying NOT NULL,
    country character varying NOT NULL,
    "groupId" integer
);


ALTER TABLE public.team OWNER TO duamelo;

--
-- Name: team_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.team_id_seq OWNER TO duamelo;

--
-- Name: team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.team_id_seq OWNED BY public.team.id;


--
-- Name: team_match_info; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.team_match_info (
    id integer NOT NULL,
    score integer NOT NULL,
    "matchId" integer,
    "teamId" integer
);


ALTER TABLE public.team_match_info OWNER TO duamelo;

--
-- Name: team_match_info_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.team_match_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.team_match_info_id_seq OWNER TO duamelo;

--
-- Name: team_match_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.team_match_info_id_seq OWNED BY public.team_match_info.id;


--
-- Name: team_stat_tournament; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.team_stat_tournament (
    id integer NOT NULL,
    points integer DEFAULT 0 NOT NULL,
    "tournamentId" integer,
    "teamId" integer
);


ALTER TABLE public.team_stat_tournament OWNER TO duamelo;

--
-- Name: team_stat_tournament_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.team_stat_tournament_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.team_stat_tournament_id_seq OWNER TO duamelo;

--
-- Name: team_stat_tournament_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.team_stat_tournament_id_seq OWNED BY public.team_stat_tournament.id;


--
-- Name: tournament; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.tournament (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL
);


ALTER TABLE public.tournament OWNER TO duamelo;

--
-- Name: tournament_id_seq; Type: SEQUENCE; Schema: public; Owner: duamelo
--

CREATE SEQUENCE public.tournament_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tournament_id_seq OWNER TO duamelo;

--
-- Name: tournament_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: duamelo
--

ALTER SEQUENCE public.tournament_id_seq OWNED BY public.tournament.id;


--
-- Name: tournament_participants_team; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.tournament_participants_team (
    "tournamentId" integer NOT NULL,
    "teamId" integer NOT NULL
);


ALTER TABLE public.tournament_participants_team OWNER TO duamelo;

--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: duamelo
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO duamelo;

--
-- Name: account id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.account ALTER COLUMN id SET DEFAULT nextval('public.account_id_seq'::regclass);


--
-- Name: group id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public."group" ALTER COLUMN id SET DEFAULT nextval('public.group_id_seq'::regclass);


--
-- Name: match id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.match ALTER COLUMN id SET DEFAULT nextval('public.match_id_seq'::regclass);


--
-- Name: phase id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.phase ALTER COLUMN id SET DEFAULT nextval('public.phase_id_seq'::regclass);


--
-- Name: player id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.player ALTER COLUMN id SET DEFAULT nextval('public.player_id_seq'::regclass);


--
-- Name: team id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team ALTER COLUMN id SET DEFAULT nextval('public.team_id_seq'::regclass);


--
-- Name: team_match_info id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_match_info ALTER COLUMN id SET DEFAULT nextval('public.team_match_info_id_seq'::regclass);


--
-- Name: team_stat_tournament id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_stat_tournament ALTER COLUMN id SET DEFAULT nextval('public.team_stat_tournament_id_seq'::regclass);


--
-- Name: tournament id; Type: DEFAULT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.tournament ALTER COLUMN id SET DEFAULT nextval('public.tournament_id_seq'::regclass);


--
-- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.account (id, username, password, profil, email) FROM stdin;
1	franck	$2b$10$8pZ0bJr38zAwqZu0EVmuquY/Yquy8THUbnUbQixmMjMTIOUJ2k2/.	admin	duamel.franck@gmail.com
\.


--
-- Data for Name: group; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public."group" (id, name, "tournamentId") FROM stdin;
\.


--
-- Data for Name: match; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.match (id, venue, code, "team1Id", "team2Id", winner, "phaseId", date, duration) FROM stdin;
\.


--
-- Data for Name: phase; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.phase (id, name, description, "tournamentId") FROM stdin;
\.


--
-- Data for Name: player; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.player (id, username, role, "teamId") FROM stdin;
\.


--
-- Data for Name: team; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.team (id, name, country, "groupId") FROM stdin;
\.


--
-- Data for Name: team_match_info; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.team_match_info (id, score, "matchId", "teamId") FROM stdin;
\.


--
-- Data for Name: team_stat_tournament; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.team_stat_tournament (id, points, "tournamentId", "teamId") FROM stdin;
\.


--
-- Data for Name: tournament; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.tournament (id, name, description, start_date, end_date) FROM stdin;
\.


--
-- Data for Name: tournament_participants_team; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.tournament_participants_team ("tournamentId", "teamId") FROM stdin;
\.


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: duamelo
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- Name: account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.account_id_seq', 1, true);


--
-- Name: group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.group_id_seq', 1, false);


--
-- Name: match_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.match_id_seq', 1, false);


--
-- Name: phase_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.phase_id_seq', 1, false);


--
-- Name: player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.player_id_seq', 1, false);


--
-- Name: team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.team_id_seq', 1, false);


--
-- Name: team_match_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.team_match_info_id_seq', 1, false);


--
-- Name: team_stat_tournament_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.team_stat_tournament_id_seq', 1, false);


--
-- Name: tournament_id_seq; Type: SEQUENCE SET; Schema: public; Owner: duamelo
--

SELECT pg_catalog.setval('public.tournament_id_seq', 1, false);


--
-- Name: group PK_256aa0fda9b1de1a73ee0b7106b; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public."group"
    ADD CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY (id);


--
-- Name: tournament PK_449f912ba2b62be003f0c22e767; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.tournament
    ADD CONSTRAINT "PK_449f912ba2b62be003f0c22e767" PRIMARY KEY (id);


--
-- Name: account PK_54115ee388cdb6d86bb4bf5b2ea; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY (id);


--
-- Name: player PK_65edadc946a7faf4b638d5e8885; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY (id);


--
-- Name: team_stat_tournament PK_757c654f6c16ca26c5af758d4a9; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_stat_tournament
    ADD CONSTRAINT "PK_757c654f6c16ca26c5af758d4a9" PRIMARY KEY (id);


--
-- Name: match PK_92b6c3a6631dd5b24a67c69f69d; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY (id);


--
-- Name: tournament_participants_team PK_92f335a955996f3605368591570; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.tournament_participants_team
    ADD CONSTRAINT "PK_92f335a955996f3605368591570" PRIMARY KEY ("tournamentId", "teamId");


--
-- Name: phase PK_a9cac5076fb19818ed0f871bea8; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.phase
    ADD CONSTRAINT "PK_a9cac5076fb19818ed0f871bea8" PRIMARY KEY (id);


--
-- Name: team_match_info PK_bb4fbf4b9f0c7ad030cf3f80692; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_match_info
    ADD CONSTRAINT "PK_bb4fbf4b9f0c7ad030cf3f80692" PRIMARY KEY (id);


--
-- Name: team PK_f57d8293406df4af348402e4b74; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team
    ADD CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY (id);


--
-- Name: match REL_35deee50e58a815bec24d4876e; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT "REL_35deee50e58a815bec24d4876e" UNIQUE ("team1Id");


--
-- Name: team_stat_tournament REL_99184bee3d72228f3a608a079f; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_stat_tournament
    ADD CONSTRAINT "REL_99184bee3d72228f3a608a079f" UNIQUE ("tournamentId");


--
-- Name: match REL_b74ce0e545c690e8f690f76111; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT "REL_b74ce0e545c690e8f690f76111" UNIQUE ("team2Id");


--
-- Name: player UQ_331aaf0d7a5a45f9c74cc699ea8; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT "UQ_331aaf0d7a5a45f9c74cc699ea8" UNIQUE (username);


--
-- Name: team_match_info UQ_36a5b54b6e6bdae237752afc4ba; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_match_info
    ADD CONSTRAINT "UQ_36a5b54b6e6bdae237752afc4ba" UNIQUE ("matchId");


--
-- Name: tournament UQ_39c996e461f5fe152d4811f9e54; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.tournament
    ADD CONSTRAINT "UQ_39c996e461f5fe152d4811f9e54" UNIQUE (name);


--
-- Name: account UQ_41dfcb70af895ddf9a53094515b; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT "UQ_41dfcb70af895ddf9a53094515b" UNIQUE (username);


--
-- Name: account UQ_4c8f96ccf523e9a3faefd5bdd4c; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT "UQ_4c8f96ccf523e9a3faefd5bdd4c" UNIQUE (email);


--
-- Name: group UQ_8a45300fd825918f3b40195fbdc; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public."group"
    ADD CONSTRAINT "UQ_8a45300fd825918f3b40195fbdc" UNIQUE (name);


--
-- Name: team_match_info UQ_9812a39d87c0673221449d922b7; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_match_info
    ADD CONSTRAINT "UQ_9812a39d87c0673221449d922b7" UNIQUE ("teamId");


--
-- Name: match UQ_a1ffb381831e9e912ba419613fe; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT "UQ_a1ffb381831e9e912ba419613fe" UNIQUE (code);


--
-- Name: team_stat_tournament UQ_b4f3e78f9fe0e49e308079164c4; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_stat_tournament
    ADD CONSTRAINT "UQ_b4f3e78f9fe0e49e308079164c4" UNIQUE ("teamId");


--
-- Name: team UQ_cf461f5b40cf1a2b8876011e1e1; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team
    ADD CONSTRAINT "UQ_cf461f5b40cf1a2b8876011e1e1" UNIQUE (name);


--
-- Name: phase UQ_eedb49c9d4389b0a107004e5a7c; Type: CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.phase
    ADD CONSTRAINT "UQ_eedb49c9d4389b0a107004e5a7c" UNIQUE (name);


--
-- Name: IDX_029bbb70583ff7c6c0561d86d2; Type: INDEX; Schema: public; Owner: duamelo
--

CREATE INDEX "IDX_029bbb70583ff7c6c0561d86d2" ON public.tournament_participants_team USING btree ("tournamentId");


--
-- Name: IDX_e3d6068dac1863e37dbcb54cd9; Type: INDEX; Schema: public; Owner: duamelo
--

CREATE INDEX "IDX_e3d6068dac1863e37dbcb54cd9" ON public.tournament_participants_team USING btree ("teamId");


--
-- Name: tournament_participants_team FK_029bbb70583ff7c6c0561d86d24; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.tournament_participants_team
    ADD CONSTRAINT "FK_029bbb70583ff7c6c0561d86d24" FOREIGN KEY ("tournamentId") REFERENCES public.tournament(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: match FK_21133c89a54853c3bc5af01aed0; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT "FK_21133c89a54853c3bc5af01aed0" FOREIGN KEY ("phaseId") REFERENCES public.phase(id);


--
-- Name: match FK_35deee50e58a815bec24d4876ef; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT "FK_35deee50e58a815bec24d4876ef" FOREIGN KEY ("team1Id") REFERENCES public.team(id);


--
-- Name: team_match_info FK_36a5b54b6e6bdae237752afc4ba; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_match_info
    ADD CONSTRAINT "FK_36a5b54b6e6bdae237752afc4ba" FOREIGN KEY ("matchId") REFERENCES public.match(id);


--
-- Name: phase FK_6ba7e8295d1beb7d23b26576949; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.phase
    ADD CONSTRAINT "FK_6ba7e8295d1beb7d23b26576949" FOREIGN KEY ("tournamentId") REFERENCES public.tournament(id);


--
-- Name: team FK_96d76e96e2b2b84a0e7e7305e5c; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team
    ADD CONSTRAINT "FK_96d76e96e2b2b84a0e7e7305e5c" FOREIGN KEY ("groupId") REFERENCES public."group"(id);


--
-- Name: team_match_info FK_9812a39d87c0673221449d922b7; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_match_info
    ADD CONSTRAINT "FK_9812a39d87c0673221449d922b7" FOREIGN KEY ("teamId") REFERENCES public.team(id);


--
-- Name: team_stat_tournament FK_99184bee3d72228f3a608a079f8; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_stat_tournament
    ADD CONSTRAINT "FK_99184bee3d72228f3a608a079f8" FOREIGN KEY ("tournamentId") REFERENCES public.tournament(id);


--
-- Name: team_stat_tournament FK_b4f3e78f9fe0e49e308079164c4; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.team_stat_tournament
    ADD CONSTRAINT "FK_b4f3e78f9fe0e49e308079164c4" FOREIGN KEY ("teamId") REFERENCES public.team(id);


--
-- Name: match FK_b74ce0e545c690e8f690f761115; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.match
    ADD CONSTRAINT "FK_b74ce0e545c690e8f690f761115" FOREIGN KEY ("team2Id") REFERENCES public.team(id);


--
-- Name: group FK_dbc79b088e9c415c2f573a94656; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public."group"
    ADD CONSTRAINT "FK_dbc79b088e9c415c2f573a94656" FOREIGN KEY ("tournamentId") REFERENCES public.tournament(id);


--
-- Name: tournament_participants_team FK_e3d6068dac1863e37dbcb54cd9b; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.tournament_participants_team
    ADD CONSTRAINT "FK_e3d6068dac1863e37dbcb54cd9b" FOREIGN KEY ("teamId") REFERENCES public.team(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: player FK_e85150e7e8a80bee7f2be3adab0; Type: FK CONSTRAINT; Schema: public; Owner: duamelo
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT "FK_e85150e7e8a80bee7f2be3adab0" FOREIGN KEY ("teamId") REFERENCES public.team(id);


--
-- PostgreSQL database dump complete
--

