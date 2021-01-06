import styled from "styled-components";

export interface ContainerProps {
	active?: boolean;
}

export const Container = styled.div<ContainerProps>`
	height: 3.2rem;
	display: flex;
	align-items: center;
	padding-left: 6.4rem;
	color: ${({ theme, active }) =>
		active ? theme.colors.main : theme.text.background.medium};
	cursor: pointer;
	transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
		color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	:hover {
		background: ${({ theme }) => theme.text.background.hover};
	}

	span {
		font-family: Roboto;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0.1px;
		user-select: none;
	}
`;

export interface BadgeProps {
	internal?: boolean;
	stub?: boolean;
	deprecated?: boolean;
}

export const Badge = styled.span<BadgeProps>`
	display: inline-block;
	padding: .05em .4em;
	font-size: 75% !important;
	font-weight: 700 !important;
	line-height: 1 !important;
	text-align:center;
	white-space: nowrap;
	border-radius: .25rem;
	color: #fff;
	margin-left 0.5em;
	background-color: ${({ theme, internal, stub, deprecated}) => 
		internal ? theme.badges.internal : (stub ? theme.badges.stub : (deprecated ? theme.badges.deprecated : "#000"))
	};
`