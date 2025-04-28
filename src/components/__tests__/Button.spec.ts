import { mount } from '@vue/test-utils';
import { expect, describe, it, vi } from 'vitest';
import Button from '../ui/Button.vue';
import RemoveFolder from '../icons/common/RemoveFolder.vue';

describe('Button.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me',
      },
    });
    expect(wrapper.text()).toContain('Click me');
  });

  it('renders text from props', () => {
    const wrapper = mount(Button, {
      props: {
        text: 'Button Text',
      },
    });
    expect(wrapper.text()).toContain('Button Text');
  });

  it('applies the correct variant class', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('primary');
  });

  it('applies the correct theme class', () => {
    const wrapper = mount(Button, {
      props: {
        theme: 'brand',
      },
    });
    expect(wrapper.classes()).toContain('brand');
  });

  it('applies the correct size class', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'lg',
      },
    });
    expect(wrapper.classes()).toContain('lg');
  });

  it('is disabled when prop is passed', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('calls onClick handler when clicked', async () => {
    const onClick = vi.fn();
    const wrapper = mount(Button, {
      props: { onClick },
    });
    await wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call onClick when disabled', async () => {
    const onClick = vi.fn();
    const wrapper = mount(Button, {
      props: {
        onClick,
        disabled: true,
      },
    });
    await wrapper.trigger('click');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders an icon when icon.present is true', () => {
    const wrapper = mount(Button, {
      props: {
        icon: {
          present: true,
          component: RemoveFolder,
          position: 'left',
        },
      },
    });
    expect(wrapper.find('.icon').exists()).toBe(true);
  });

  it('does not render an icon when icon.present is false', () => {
    const wrapper = mount(Button, {
      props: {
        icon: {
          present: false,
          component: RemoveFolder,
          position: 'left',
        },
      },
    });
    expect(wrapper.find('.icon').exists()).toBe(false);
  });

  it('applies correct flex direction based on icon position', () => {
    const wrapper = mount(Button, {
      props: {
        icon: {
          present: true,
          component: RemoveFolder,
          position: 'right',
        },
      },
    });
    expect(wrapper.attributes('style')).toContain(
      'flex-direction: row-reverse',
    );

    const wrapperLeft = mount(Button, {
      props: {
        icon: {
          present: true,
          component: RemoveFolder,
          position: 'left',
        },
      },
    });
    expect(wrapperLeft.attributes('style')).toContain('flex-direction: row');
  });
});
