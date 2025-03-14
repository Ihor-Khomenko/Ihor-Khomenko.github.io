import { forwardRef, SVGProps } from 'react'
import Image from 'next/image'

export const GithubIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <Image src="/img/github.svg" alt="GitHub" width={24} height={24} />
))

export const LinkedinIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <Image src="/img/linkedin.svg" alt="LinkedIn" width={24} height={24} />
))

export const InstagramIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <Image src="/img/instagram.svg" alt="Instagram" width={24} height={24} />
)) 