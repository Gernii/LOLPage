import Section , {SectionContent} from '../section/Section'

const HomeSection = props => {
    return (
        <Section
            class
        >
            <SectionContent>
                {props.children}
            </SectionContent>
        </Section>
    )
}

export default HomeSection
