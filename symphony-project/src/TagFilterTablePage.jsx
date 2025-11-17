import React, { useState, useMemo } from "react";
import { Layout, Table, Select, Space, Typography, Card, Tag } from "antd";
import INITIAL_DATA from "./initial_data";

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

// Tag definitions (id -> label & color)
const TAG_DEFINITIONS = {
    tag1: { label: "🐊 Crocodile", color: "green" },
    tag2: { label: "🐪 Camel", color: "blue" },
    tag3: { label: "🐆 Cheetah", color: "orange" },
    tag4: { label: "🦎 Chameleon", color: "purple" },
    tag5: { label: "⭐ Starfish", color: "yellow" },
};

// Options for the filter <Select />
const TAG_OPTIONS = Object.entries(TAG_DEFINITIONS).map(
    ([value, { label }]) => ({
        value,
        label,
    })
);

// Sample data (each row: name, date, team, tags)

export default function TagFilterTablePage() {
    const [data] = useState(INITIAL_DATA);

    // Tag filter state
    const [filterTags, setFilterTags] = useState([]); // e.g. ['tag1'] or ['tag1', 'tag2']
    const [filterMode, setFilterMode] = useState("includes");
    // 'includes'  = row must include all selected tags (can have more)
    // 'exact'     = row must contain exactly those tags (no more, no less)

    // Filtered data based on selected tags & mode
    const filteredData = useMemo(() => {
        if (!filterTags.length) return data;

        return data.filter((row) => {
            const rowTags = row.tags || [];

            if (filterMode === "includes") {
                // Row must include all selected tags
                return filterTags.every((t) => rowTags.includes(t));
            }

            if (filterMode === "exact") {
                // Row must contain exactly the same tags as filterTags
                if (rowTags.length !== filterTags.length) return false;
                return filterTags.every((t) => rowTags.includes(t));
            }

            return true;
        });
    }, [data, filterTags, filterMode]);

    // Table columns
    const columns = [
        {
            title: "Index",
            key: "index",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name, "en"),
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            render: (value) => (
                <span style={{ direction: "ltr" }}>{value}</span>
            ),
        },
        {
            title: "Team",
            dataIndex: "team",
            key: "team",
            sorter: (a, b) => a.team.localeCompare(b.team, "en"),
        },
        {
            title: "Link",
            dataIndex: "link",
            key: "link",
            sorter: (a, b) => a.link.localeCompare(b.link, "en"),
        },
        {
            title: "Animals",
            dataIndex: "tags",
            key: "tags",
            render: (_, record) => (
                <Space size="small">
                    {record.tags?.map((tagKey) => {
                        const tagDef = TAG_DEFINITIONS[tagKey] || {};
                        return (
                            <Tag key={tagKey} color={tagDef.color}>
                                {tagDef.label || tagKey}
                            </Tag>
                        );
                    })}
                </Space>
            ),
        },
    ];

    return (
        <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
            <Header
                style={{
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    paddingInline: 32,
                    height: 80,
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Title level={3} style={{ margin: 0 }}>
                        The Symphony of Building a Software Team — MelkRadar
                        Edition
                    </Title>

                    <span
                        style={{
                            fontSize: 12,
                            color: "#999",
                            lineHeight: 2.5,
                        }}
                    >
                        *Note: This table is purely for fun!*
                    </span>
                </div>
            </Header>

            <Content style={{ padding: 32 }}>
                <div
                    style={{
                        maxWidth: 1100,
                        margin: "0 auto",
                    }}
                >
                    <Card
                        style={{ borderRadius: 16 }}
                        bodyStyle={{ padding: 24 }}
                    >
                        <Space
                            direction="vertical"
                            size="large"
                            style={{ width: "100%" }}
                        >
                            <div>
                                <Title level={4} style={{ marginBottom: 8 }}>
                                    Selections of the New Team Members
                                </Title>
                                <Paragraph
                                    // type="secondary"
                                    style={{ marginBottom: 0 }}
                                >
                                    During the onboarding process for new
                                    development team members, we introduce a
                                    short video titled{" "}
                                    <strong>
                                        “The Symphony of Building a Software
                                        Team.”
                                    </strong>
                                    The video explains that teammates can have
                                    different strengths and natural styles, and
                                    that a successful team thrives when a mix of
                                    these styles work together.
                                    <br />
                                    <br />
                                    The video presents five light-hearted
                                    archetypes that help newcomers identify how
                                    they typically show up in a team:
                                    <ul
                                        style={{
                                            marginTop: 12,
                                            marginBottom: 12,
                                        }}
                                    >
                                        <li>
                                            <strong>🐊 Crocodile</strong>:
                                            long-term vision, strategic
                                            thinking, comfort with abstract
                                            concepts, and no rush to jump ahead
                                            before the future is clear.
                                        </li>
                                        <li>
                                            <strong>🐪 Camel</strong>: steady,
                                            thoughtful progress, risk-avoidance,
                                            preference for deep focus, and
                                            prioritizing complete, polished work
                                            over deadlines.
                                        </li>
                                        <li>
                                            <strong>🐆 Cheetah</strong>: fast,
                                            execution-driven, highly practical,
                                            strong at turning plans into action,
                                            valuing time and operational
                                            clarity.
                                        </li>
                                        <li>
                                            <strong>🦎 Chameleon</strong>:
                                            highly adaptive, enjoys connecting
                                            with new people, empathic in seeing
                                            situations through others’
                                            perspectives, effective in
                                            communication and alignment.
                                        </li>
                                        <li>
                                            <strong>⭐ Starfish</strong>:
                                            resilient, supportive,
                                            problem-solving oriented, enjoys
                                            helping others, strengthens team
                                            cohesion, and keeps the group moving
                                            forward.
                                        </li>
                                    </ul>
                                    Everyone may relate to multiple types, but
                                    at the end of the video, newcomers are asked
                                    to choose the <strong>two</strong> that
                                    represent them best. This simple, engaging
                                    exercise helps break the ice, gives the team
                                    an immediate sense of each person’s natural
                                    working style, and reinforces the idea that
                                    great teams succeed through diversity of
                                    strengths.
                                </Paragraph>
                            </div>

                            {/* Tag filter controls */}
                            <Space
                                direction="vertical"
                                size="middle"
                                style={{ width: "100%" }}
                            >
                                {/* <Text strong>Tag Filters</Text> */}

                                <Space wrap>
                                    <div>Contains selected animal(s):</div>
                                    <Select
                                        mode="multiple"
                                        placeholder="Select Animal to Filter by"
                                        options={TAG_OPTIONS}
                                        value={filterTags}
                                        onChange={(value) => {
                                            if (value.length <= 2) {
                                                setFilterTags(value);
                                            }
                                        }}
                                        style={{ minWidth: 260 }}
                                        maxTagCount={2}
                                    />

                                    {/* HERE — Count Display */}
                                    <Text
                                        type="secondary"
                                        style={{ fontSize: 14 }}
                                    >
                                        Showing{" "}
                                        <strong>{filteredData.length}</strong>{" "}
                                        item
                                        {filteredData.length !== 1 ? "s" : ""}
                                    </Text>
                                </Space>
                            </Space>

                            {/* Data table */}
                            <Table
                                columns={columns}
                                dataSource={filteredData}
                                rowKey="key"
                                pagination={{ pageSize: 10 }}
                            />
                        </Space>
                    </Card>
                </div>
            </Content>
        </Layout>
    );
}
