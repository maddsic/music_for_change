import { HomeDataProvider } from '~/context/homeDataContext';
import type { Route } from './+types/home';
import * as Components from '~/components';
import { useModal } from '~/hooks/useModal';
import ProjectModal from '~/components/projects/projectModal';

export function meta({ }: Route.MetaArgs) {
  return [{ title: 'Music For Change' }, { name: 'description', content: 'Music for Change' }];
}


export default function Home() {
  const { modal, closeModal } = useModal();

  return (
    <HomeDataProvider>
      <section id="home" className="">
        <Components.HeroSlider />
        <Components.AboutUs />
        <Components.WhatWeDo />
        <Components.ImpactStats />
        <Components.Events />
        <Components.OurProjects />
        <ProjectModal open={modal === 'project'} onClose={closeModal} />
        <Components.OurPartners />
        <Components.OurTeam />
        <Components.Testimonials />
        <Components.Gallery />
      </section>
    </HomeDataProvider>
  );
}
